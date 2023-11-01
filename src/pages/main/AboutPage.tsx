import React from 'react';

import usePageTitle from '@/hooks/usePageTitle';
import AbcIcon from '@mui/icons-material/Abc';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import PhoneIcon from '@mui/icons-material/Phone';

const infoList: {
  key: string;
  value: string;
  type: 'text' | 'link';
  icon: React.FC;
}[] = [
  {
    key: 'ID',
    value: 'SE173476',
    type: 'text',
    icon: Grid3x3Icon,
  },
  {
    key: 'Full Name',
    value: 'Le Ngoc Thach',
    type: 'text',
    icon: AbcIcon,
  },
  {
    key: 'Phone',
    value: '0901469725',
    type: 'text',
    icon: PhoneIcon,
  },
  {
    key: 'Email',
    value: 'ThachLNSE173476@fpt.edu.vn',
    type: 'text',
    icon: EmailIcon,
  },
  {
    key: 'Github',
    value: 'https://github.com/hiamthach/fer-lab',
    type: 'link',
    icon: GitHubIcon,
  },
];

const AboutPage = () => {
  usePageTitle('About');

  return (
    <div className="mt-5">
      <h1 className="font-bold text-4xl text-primary">FER - LAB7</h1>

      <ul className="mt-5 flex flex-col gap-4">
        {infoList.map((item, i) => (
          <div className="flex gap-2 items-center" key={i}>
            <item.icon />
            <div className="w-32">{item.key}:</div>

            {item.type === 'link' ? (
              <a href={item.value} target="_blank" className="hover:text-primary hover:underline">
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
