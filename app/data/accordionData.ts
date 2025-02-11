export interface AccordionItemData {
    value: string;
    trigger: string;
    content: string;
  }
  
  export const accordionItems: AccordionItemData[] = [
    {
      value: 'item-1',
      trigger: 'How long until I see results?',
      content:
        'Most users begin to see initial results within 3-6 months of consistent use. However, individual results may vary based on factors such as genetics and overall health.',
    },
    {
      value: 'item-2',
      trigger: 'Is GrowNatural safe to use?',
      content:
        'Yes, GrowNatural is formulated with scientifically proven ingredients that have been extensively studied for safety and efficacy. As with any topical product, we recommend performing a patch test before first use.',
    },
    {
      value: 'item-3',
      trigger: 'How do I apply GrowNatural?',
      content:
        'Apply GrowNatural twice daily to clean, dry scalp. Use the dropper to apply directly to areas of concern and gently massage into the scalp. For best results, use consistently as part of your daily routine.',
    },
  ];