import type { FilterItem } from "../types/filter";

declare global {
  interface Array<T> {
    filterSectionsBySearch(search: string): T extends FilterItem
      ? FilterItem[]
      : never;
  }
}

Array.prototype.filterSectionsBySearch = function (
  search: string
): FilterItem[] {
  return (this as FilterItem[]).map((item) => ({
      ...item,
      options: item.options.filter(
        (opt) =>
          opt.label.matchSearch(search) || opt.value.matchSearch(search)
      ),
    }))
    .filter((item) => item.options.length > 0);
};

export {};
