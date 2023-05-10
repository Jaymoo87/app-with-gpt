import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50">Sub and Follow</h4>
      <div className="mx-5 my-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="my-8 bg-wg-900">advert image</div>
      <h4 className="px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50">About the Blog</h4>
      <div className="my-8 bg-wg-900">profile image</div>
      <h4 className="px-5 py-3 font-bold text-center text-wh-500">Justin</h4>
      <p className="text-sm text-center text-wh-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis non placeat maiores a dignissimos
        excepturi.
      </p>
    </section>
  );
};

export default Sidebar;
