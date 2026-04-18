declare global {
  interface String {
    matchSearch(search: string): boolean;
  }
}

String.prototype.matchSearch = function (search: string): boolean {
  if (!search.trim()) return true;
  return this.toLowerCase().includes(search.trim().toLowerCase());
};

export {};
