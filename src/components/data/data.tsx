import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CircleIcon,
    CheckIcon,
  } from "@radix-ui/react-icons"
  
  export const labels = [
    {
      value: "bug",
      label: "Bug",
    },
    {
      value: "feature",
      label: "Feature",
    },
    {
      value: "documentation",
      label: "Documentation",
    },
  ]
  
  export const statuses = [
    {
      value: "pago",
      label: "Pago",
      icon: CheckIcon,
    },
    {
      value: "não pago",
      label: "Não Pago",
      icon: CircleIcon,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]
  