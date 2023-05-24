interface ifProps {
  teste: boolean
  children: any
}

export default function If(props: ifProps) {
  if (props.teste) {
    return props.children
  } else {
    return null
  }
}