import { ROUTE_NAMES } from '@/enums'
import { config } from '@config'
import { computed } from 'vue'
import { useI18n } from './use-i18n'

export const useNavLinks = () => {
  const { t } = useI18n()

  const links = computed(() => [
    {
      text: t('app-navbar.mor20-ecosystem-link'),
      route: { name: ROUTE_NAMES.appMor20EcosystemMain },
    },
    {
      text: t('app-navbar.contract-faq-link'),
      href: config.CONTRACT_FAQ_URL,
    },
    {
      text: t('app-navbar.community-website-link'),
      href: config.LANDING_URL,
    },
  ])

  return { links }
}
