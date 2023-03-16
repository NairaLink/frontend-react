import React from 'react';
import logo from '../images/nairalink.png';
const data = [
  {
    id: 1,
    title: 'Box Office News!',
    content:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumendaexcepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.',
    button: 'Get Started',
    img: logo,
  },
  {
    id: 1,
    title: 'Box Office News!',
    content:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumendaexcepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.',
    button: 'Get Started',
    img: logo,
  },
  {
    id: 1,
    title: 'Box Office News!',
    content:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumendaexcepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.',
    button: 'Get Started',
    img: logo,
  },
  {
    id: 1,
    title: 'Box Office News!',
    content:
      'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumendaexcepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.',
    button: 'Get Started',
    img: logo,
  },
];

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {data.map((item) => {
          const { id, title, content, img, button } = item;
          return (
            <>
              <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">{content}</p>
                <button className="btn btn-primary bg-green-600">
                  {button}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
