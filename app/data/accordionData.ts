export interface AccordionItemData {
  value: string;
  trigger: string;
  content: string;
}

export const accordionItems: AccordionItemData[] = [
  {
    value: 'item-1',
    trigger: 'Sonuçları görmek ne kadar sürer?',
    content:
      'Düzenli kullanımla çoğu kullanıcı 3-6 ay içinde ilk sonuçları görmeye başlar. Ancak, sonuçlar genetik yapı ve genel sağlık durumuna göre değişiklik gösterebilir.',
  },
  {
    value: 'item-2',
    trigger: 'GrowNatural kullanımı güvenli mi?',
    content:
      'Evet, GrowNatural; güvenlik ve etkinlik açısından kapsamlı olarak incelenmiş, bilimsel kanıtlarla formüle edilmiştir. İlk kullanım öncesinde yama testi yapmanızı öneririz.',
  },
  {
    value: 'item-3',
    trigger: 'GrowNatural nasıl uygulanır?',
    content:
      "GrowNatural'ı temiz ve kuru saç derisine günde iki kez uygulayın. Damlalık yardımıyla ilgili bölgelere doğrudan uygulayın ve nazikçe masaj yapın. En iyi sonuçlar için, günlük rutininizin bir parçası haline getirin.",
  },
];