'use client';
import MainLayout from '@/components/layout/main/MainLayout'
import { useTranslation } from '@/app/i18n/i18n'

export default function Home({
  params: {locale}
}: Readonly<{
  params: {locale: string};
}>) {
  const { t } = useTranslation(locale);
  return (
    <MainLayout title="BTS" icon="BTSIcon" back >
      <div>{t('demo')}</div>
      <div>
        {t('lorem')}
      </div>
    </MainLayout>
  );
}
