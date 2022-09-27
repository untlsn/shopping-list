interface TestFieldProps {
  label?: string
  className?: string
  onChange(value: string): void
  name?: string
  value?: string
  error?: any
}

function TextField(props: TestFieldProps) {
  return (
    <div class={clsx('relative', props.className)}>
      <input
        name={props.name}
        value={props.value}
        class="bg-background-input rounded-lg p-(4 b2) focus:outline-none peer w-full"
        onChange={(ev) => props.onChange(ev.currentTarget.value)}
      />
      <p class="opacity-10 absolute left-4 top-0 text-sm transition-opacity peer-focus:opacity-30">{props.label}</p>
      <small class="text-red-300">{props.error}</small>
    </div>
  );
}

export default TextField;
