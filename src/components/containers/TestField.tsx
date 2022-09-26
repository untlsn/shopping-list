interface TestFieldProps {
  label?: string
  className?: string
  onChange(value: string): void
}

function TestField(props: TestFieldProps) {
  return (
    <div class={clsx('relative', props.className)}>
      <input
        class="bg-background-input rounded p-(4 b2) focus:outline-none peer w-full"
        onChange={(ev) => props.onChange(ev.currentTarget.value)}
      />
      <p class="opacity-10 absolute left-4 top-0 text-sm transition-opacity peer-focus:opacity-30">{props.label}</p>
    </div>
  );
}

export default TestField;
