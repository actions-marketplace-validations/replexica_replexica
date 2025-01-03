'use server';

import loadIntl from "@/i18n/server";
import Counter from "./counter.client";
import Inner from "./inner.server";

export async function generateMetadata() {
  const i18n = await loadIntl();
  return {
    title: i18n.formatMessage({id: 'home.title'}),
  };
}

// Example of a server component
export default async function Page(props: any) {
  const i18n = await loadIntl(props.params.locale);

  return (
    <div>
      <h1>{i18n.formatMessage({id: 'home.title'})}</h1>
      <Counter>
        <Inner />
      </Counter>
    </div>
  );
}
