import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Helmet } from 'react-helmet-async';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import DecoderText from 'components/DecoderText';
import Image from 'components/Image';
import Heading from 'components/Heading';
import Text from 'components/Text';
import { reflow } from 'utils/transition';
import notFound from 'assets/notfound.mp4';
import notFoundPoster from 'assets/notfound.jpg';
import './index.css';

const NotFound = () => (
  <section className="page-404">
    <Helmet>
      <title tag="title">404 | Not Found</title>
      <meta name="description" content="404 page not found. This page doesn't exist" />
    </Helmet>
    <Transition appear in={true} timeout={0} onEnter={reflow}>
      {status => (
        <Fragment>
          <div className="page-404__details">
            <div className="page-404__text">
              <Heading
                className={classNames('page-404__title', `page-404__title--${status}`)}
                level={1}
              >
                404
              </Heading>
              <Heading
                aria-hidden
                className={classNames(
                  'page-404__subheading',
                  `page-404__subheading--${status}`
                )}
                as="h2"
                level={3}
              >
                <DecoderText
                  text="Error: Redacted"
                  start={status !== 'exited'}
                  delay={300}
                />
              </Heading>
              <Text
                className={classNames(
                  'page-404__description',
                  `page-404__description--${status}`
                )}
              >
                This page could not be found. It either doesn’t exist or was deleted.
              </Text>
              <Button
                secondary
                iconHoverShift
                className={classNames(
                  'page-404__button',
                  `page-404__button--${status}`
                )}
                as={Link}
                to="/"
                icon="chevronRight"
              >
                Back to homepage
              </Button>
            </div>
          </div>

          <div
            className={classNames(
              'page-404__video-container',
              `page-404__video-container--${status}`
            )}
          >
            <Image
              className={classNames('page-404__video', `page-404__video--${status}`)}
              src={notFound}
              placeholder={notFoundPoster}
              alt="A cyberpunk robot with a helmet, reading file not found."
            />
            <a
              className={classNames('page-404__credit', `page-404__credit--${status}`)}
              href="https://twitter.com/ruinergame"
              target="_blank"
              rel="noopener noreferrer"
            >
              Animation from Ruiner
            </a>
          </div>
        </Fragment>
      )}
    </Transition>
  </section>
);

export default NotFound;
