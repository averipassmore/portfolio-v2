'use client';
import {
  NavBar, 
  Button, 
  Typer,
  SkillPill,
  TechnologyPill,
  ExperiencePage
  // ParticleCanvas 
} from '@/components';
import { NavItem, SkillItem, ParticleOptions } from '@/types';

const HomePage = () => {
  const titles = [`hello, i'm averi`, `i'm a full stack engineer`, `welcome to my space :)`]
  const navItems:NavItem[] = [
    {
      text: 'about',
      onClick: () => {}
    },
    {
      text: 'experience',
      onClick: () => {}
    },
    {
      text: 'contact',
      onClick: () => {}
    },
    {
      text: 'fun stuff',
      onClick: () => {}
    }
  ];

  const skillsTop:SkillItem[] = [
    {
      text: 'problem solver',
      iconSrc: '/puzzle.svg',
      iconAlt: 'puzzle',
      iconHeight: 38,
      iconWidth: 38
    },
    {
      text: 'growth mindset',
      iconSrc: '/brain.svg',
      iconAlt: 'brain'
    },
    {
      text: `adaptabled n' malleable`,
      iconSrc: '/splat.svg',
      iconAlt: 'spalt'
    }
  ];
  
  const skillsBottom:SkillItem[] = [
    {
      text: 'effective mentor',
      iconSrc: '/mentor.svg',
      iconAlt: 'mentor'
    },
    {
      text: 'experimental creative',
      iconSrc: '/create.svg',
      iconAlt: 'create',
      iconHeight: 38,
      iconWidth: 38
    },
    {
      text: 'optimistic approach',
      iconSrc: '/smile.svg',
      iconAlt: 'smile'
    }
  ];

  const technologies:SkillItem[] = [
    {
      text: 'javascript',
      iconSrc: './javascript.svg',
      iconAlt: 'javascript'
    },
    {
      text: 'react',
      iconSrc: './react.svg',
      iconAlt: 'react'
    },
    {
      text: 'redux',
      iconSrc: './redux.svg',
      iconAlt: 'redux'
    },
    {
      text: 'css',
      iconSrc: './css.svg',
      iconAlt: 'css'
    },
    {
      text: 'tailwind',
      iconSrc: './tailwind.svg',
      iconAlt: 'tailwind'
    },
    {
      text: 'graphql',
      iconSrc: './graphql.svg',
      iconAlt: 'graphql'
    },
    {
      text: 'java',
      iconSrc: './java.svg',
      iconAlt: 'java'
    },
    {
      text: 'spring boot',
      iconSrc: './springboot.svg',
      iconAlt: 'spring boot'
    },
    {
      text: 'next.js',
      iconSrc: '/nextjs.svg',
      iconAlt: 'nextjs'
    },
    {
      text: 'git',
      iconSrc: './git.svg',
      iconAlt: 'git'
    },
  ]

  const particleOptions: ParticleOptions = {
    number: 100,
    speed: 2
  };

  return (
    <div className='w-full h-full bg-[#212628] flex flex-col items-center'>
      <NavBar navItems={navItems} navIconSrc={'/anpLogo.png'} />
      <div className='flex max-w-[1600px] w-full flex-wrap p-[120px] gap-[64px] b-'>
        <div className='flex flex-col gap-[60px] w-[750px] min-w-[750px]'>
          <div className='flex gap-[12px] font-semibold text-[57px]'>
            <span className='text-[#c4c4c4]'>{`// `}</span><Typer contents={titles} />
          </div>
          <div className='flex'>
            <h4 className='text-[#c4c4c4] text-[20px] font-semibold'>{`a dedicated lifelong learner with a diverse background and broad skillset. i seek creative outlets and the ability to make an impact in our world.`}</h4>
          </div>
          <div className='flex gap-[72px]'>
            {skillsTop.map(skill => 
              <SkillPill
                key={skill.iconAlt}
                iconSrc={skill.iconSrc}
                iconAlt={skill.iconAlt}
                text={skill.text}
                iconHeight={skill.iconHeight}
                iconWidth={skill.iconWidth}
              />
            )}
          </div>
          <div className='flex gap-[72px]'>
            {skillsBottom.map(skill => 
              <SkillPill
                key={skill.iconAlt}
                iconSrc={skill.iconSrc}
                iconAlt={skill.iconAlt}
                text={skill.text}
                iconHeight={skill.iconHeight}
                iconWidth={skill.iconWidth}
              />
            )}
          </div>
          <Button
            text='view my work'
            onClick={() => {}}
            iconSrc={'/arrowDown.svg'}
            iconAlt='arrow down'
          />
        </div>
        <div className='flex flex-col justify-center max-w-[40%] min-w-[498px] items-center gap-[24px]'>
          <div className='flex flex-wrap gap-[24px]'>
            <TechnologyPill item={technologies[0]} />
            <TechnologyPill item={technologies[1]} />
          </div>
          <div className='flex flex-wrap gap-[24px]'>
            <TechnologyPill item={technologies[2]} />
            <TechnologyPill item={technologies[3]} />
            <TechnologyPill item={technologies[4]} />
          </div>
          <div className='flex flex-wrap gap-[24px]'>
            <TechnologyPill item={technologies[5]} />
            <TechnologyPill item={technologies[6]} />
            <TechnologyPill item={technologies[7]} />
          </div>
          <div className='flex flex-wrap gap-[24px]'>
            <TechnologyPill item={technologies[8]} />
            <TechnologyPill item={technologies[9]} />
          </div>
        </div>
      </div>
      <ExperiencePage />
      {/* <ParticleCanvas options={particleOptions}/> */}
    </div>
  )
};

export default HomePage;