const agoUnits = [
  [60, 'second'],
  [60, 'minute'],
  [24, 'hour'],
  [7, 'day'],
  [5, 'week'],
] as const;

export function fromNow(date: Date): string {
  if (!date) return '';
  const now = new Date();
  const elapsed = now.getTime() - date.getTime();

  let remainingInUnit = Math.abs(elapsed) / 1000;
  if (remainingInUnit < 15) {
    return 'just now';
  }
  for (const [unit, unitName] of agoUnits) {
    const rounded = Math.round(remainingInUnit);
    if (rounded < unit) {
      if (elapsed < 0) {
        return `in ${rounded} ${unitName}${rounded === 1 ? '' : 's'}`;
      } else {
        return `${rounded} ${unitName}${rounded === 1 ? '' : 's'} ago`;
      }
    }
    remainingInUnit /= unit;
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
