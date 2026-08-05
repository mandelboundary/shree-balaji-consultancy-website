"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "./universities.module.css";

export type University = {
  name: string;
  location: string;
  fields: string[];
  levels: string[];
  budget: string;
};

type Filters = {
  field: string;
  level: string;
  location: string;
  budget: string;
};

const emptyFilters: Filters = {
  field: "",
  level: "",
  location: "",
  budget: "",
};

const unique = (values: string[]) => [...new Set(values)].sort();

export default function UniversityFinder({
  universities,
}: {
  universities: University[];
}) {
  const [draftFilters, setDraftFilters] = useState<Filters>(emptyFilters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(emptyFilters);

  const options = useMemo(
    () => ({
      fields: unique(universities.flatMap((university) => university.fields)),
      levels: unique(universities.flatMap((university) => university.levels)),
      locations: unique(universities.map((university) => university.location)),
      budgets: ["Up to ₹2 lakh", "₹2–5 lakh", "₹5 lakh+"],
    }),
    [universities],
  );

  const results = useMemo(
    () =>
      universities.filter(
        (university) =>
          (!appliedFilters.field ||
            university.fields.includes(appliedFilters.field)) &&
          (!appliedFilters.level ||
            university.levels.includes(appliedFilters.level)) &&
          (!appliedFilters.location ||
            university.location === appliedFilters.location) &&
          (!appliedFilters.budget ||
            university.budget === appliedFilters.budget),
      ),
    [appliedFilters, universities],
  );

  const hasAppliedFilters = Object.values(appliedFilters).some(Boolean);

  function updateFilter(key: keyof Filters, value: string) {
    setDraftFilters((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAppliedFilters(draftFilters);
  }

  function resetFilters() {
    setDraftFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
  }

  return (
    <div className={styles.finder}>
      <div className={styles.finderHeading}>
        <p className={styles.eyebrow}>Smart search</p>
        <h2 id="college-finder-title">
          Find your <span>best-fit university.</span>
        </h2>
        <p>
          Filter the current shortlist by the details that matter most to your
          study plan.
        </p>
      </div>

      <form
        className={styles.filterPanel}
        aria-labelledby="college-finder-title"
        onSubmit={handleSubmit}
      >
        <label className={styles.filterField}>
          <span>Course / field</span>
          <select
            value={draftFilters.field}
            onChange={(event) => updateFilter("field", event.target.value)}
          >
            <option value="">All fields</option>
            {options.fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.filterField}>
          <span>Study level</span>
          <select
            value={draftFilters.level}
            onChange={(event) => updateFilter("level", event.target.value)}
          >
            <option value="">All levels</option>
            {options.levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.filterField}>
          <span>Preferred location</span>
          <select
            value={draftFilters.location}
            onChange={(event) => updateFilter("location", event.target.value)}
          >
            <option value="">All locations</option>
            {options.locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.filterField}>
          <span>Annual budget preference</span>
          <select
            value={draftFilters.budget}
            onChange={(event) => updateFilter("budget", event.target.value)}
          >
            <option value="">Any budget</option>
            {options.budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>

        <button className={styles.searchButton} type="submit">
          Find best matches <span aria-hidden="true">→</span>
        </button>
      </form>

      <div className={styles.resultHeader}>
        <p aria-live="polite">
          <strong>{results.length}</strong>{" "}
          {results.length === 1 ? "university matches" : "universities match"}
          {hasAppliedFilters ? " your filters" : " your search"}.
        </p>
        {hasAppliedFilters && (
          <button type="button" onClick={resetFilters}>
            Clear filters
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <div className={styles.resultsGrid}>
          {results.map((university) => (
            <article className={styles.universityCard} key={university.name}>
              <p className={styles.location}>{university.location}</p>
              <h3>Admission in {university.name}</h3>
              <p>
                Course shortlisting, eligibility checks, and application
                guidance.
              </p>
              <div className={styles.tags}>
                {university.fields.slice(0, 2).map((field) => (
                  <span key={field}>{field}</span>
                ))}
                <span>{university.budget}</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h3>No exact matches yet</h3>
          <p>
            Try widening one filter, or contact a counsellor for a custom
            shortlist.
          </p>
          <button type="button" onClick={resetFilters}>
            Reset search
          </button>
        </div>
      )}
    </div>
  );
}
