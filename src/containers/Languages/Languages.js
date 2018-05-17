import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import BackLink from '../../components/BackLink/BackLink';
import OptionsList from '../../components/OptionsList/OptionsList';

const Languages = () => {
  const goBack = <BackLink />;

  return (
    <section className="page">
      <PageHeader leftFunction={goBack}>
        <h1>Languages</h1>
      </PageHeader>
      <OptionsList options={['English', 'Swedish']} active={'English'} />
    </section>
  );
};

export default Languages;
