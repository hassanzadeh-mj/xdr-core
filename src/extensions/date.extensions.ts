declare global {
  interface Date {
    formatDateTime(): string;
  }
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

Date.prototype.formatDateTime = function (): string {
  const month = MONTHS[this.getMonth()];
  const day = this.getDate();
  const year = this.getFullYear();
  const hours = String(this.getHours()).padStart(2, "0");
  const minutes = String(this.getMinutes()).padStart(2, "0");
  return `${month} ${day},${year} ${hours}:${minutes}`;
};

export {};
