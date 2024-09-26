import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Configured',
    Svg: require('@site/static/img/ascii/02.svg').default,
    description: (
      <>
        Details about getting sudoSignals started on your installation, 
        and how to configuration your web Dashboard.
      </>
    ),
  },
  {
    title: 'Organize Your Machines',
    Svg: require('@site/static/img/ascii/03.svg').default,
    description: (
      <>
        Look at our v2 docs for the latest features that allow you to organize machiens into installations.
      </>
    ),
  },
  {
    title: 'sudoSignals Plugin',
    Svg: require('@site/static/img/ascii/05.svg').default,
    description: (
      <>
        Using a plugin - you'll find details about the officially supported
        SudoMagic plugins here along with quick access to their downloads.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
