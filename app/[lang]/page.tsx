import { Locale } from '@/i18n-config';

import { getDictionary } from '../../dictionaries';

export default async function Home({
    params,
}: Readonly<{
    params: Promise<{lang: Locale}>;
}>) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div
            className="min-h-screen  flex flex-col items-center justify-center p-4"
        >
            <h1 className='text-lg font-medium text-center'>{dictionary.texts.textHere}</h1>
        </div>
    );
}
