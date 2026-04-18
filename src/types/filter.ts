export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

export interface FilterItem {
  id: string;
  label: string;
  iconKey: string;
  options: FilterOption[];
}
