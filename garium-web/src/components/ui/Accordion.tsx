'use client'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <RadixAccordion.Root type="single" collapsible className={cn('space-y-2', className)}>
      {items.map((item, i) => (
        <RadixAccordion.Item
          key={i}
          value={`item-${i}`}
          className="border border-[#D1D9E8] rounded-lg overflow-hidden"
        >
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-black hover:bg-[#F5F7FA] transition-colors duration-200 group">
              {item.question}
              <ChevronDown
                className="w-4 h-4 text-[#6B7280] transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0 ml-4"
                aria-hidden
              />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="overflow-hidden data-[state=open]:animate-[accordionDown_200ms_ease] data-[state=closed]:animate-[accordionUp_200ms_ease]">
            <div className="px-6 pb-5 text-base text-[#374151] leading-relaxed">
              {item.answer}
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}
