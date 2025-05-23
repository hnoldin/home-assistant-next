"use client";
export default function InputLabel({
  label,
  icon,
}: {
  label?: string;
  icon?: JSX.Element;
}) {
  return (
    <span className="flex flex-row items-center gap-2">
      {icon}
      <span className="text-primary block text-sm font-medium">{label}</span>
    </span>
  );
}
