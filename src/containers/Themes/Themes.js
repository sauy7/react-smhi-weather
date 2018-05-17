import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import BackLink from '../../components/BackLink/BackLink';
import OptionsList from '../../components/OptionsList/OptionsList';

const Themes = () => {
  const goBack = <BackLink />;

  return (
    <section className="page">
      <PageHeader leftFunction={goBack}>
        <h1>Themes</h1>
      </PageHeader>
      <OptionsList options={['Light', 'Dark']} active={'Light'} />
    </section>
  );
};

export default Themes;
