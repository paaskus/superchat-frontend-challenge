/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';

import LinkService, { CreateLinkArgs } from '../services/link.service';
import ColorName from '../types/ColorName';
import IconName from '../types/IconName';
import Button from './Button';
import ColorPicker from './ColorPicker';
import IconPicker from './IconPicker';
import Link from './Link';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LinkCreator = () => {
  const [icon, setIcon] = useState<IconName>(IconName.FIRE);
  const [color, setColor] = useState<ColorName>(ColorName.MAGENTA);
  const [username, setUsername] = useState<string>('');
  const [repository, setRepository] = useState<string>('');
  const [linkId, setLinkId] = useState<string | null>(null);

  const createLink = async (args: CreateLinkArgs) => {
    const id = await LinkService.createLink(args);
    setLinkId(id);
  };

  if (linkId) {
    return (
      <Wrapper>
        <h2 style={{ textAlign: 'center' }}>
          Wuhuu! Your new awesome link to
          <br />
          <strong style={{ color: ColorName.MAGENTA }}>
            {`${username}/${repository}`}
          </strong>{' '}
          <br />
          is:
        </h2>
        <Link href={`/r/${linkId}`}>
          {`${window.location.host}/r/${linkId}`}
        </Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2>Username</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <h2>Repository</h2>
      <input
        type="text"
        value={repository}
        onChange={(e) => setRepository(e.target.value)}
      />
      <br />
      <h2>Color</h2>
      <ColorPicker
        colors={Object.values(ColorName)}
        selected={color}
        onSelect={(c) => setColor(c)}
      />
      <br />
      <h2>Icon</h2>
      <IconPicker
        icons={Object.values(IconName)}
        selected={icon}
        onSelect={(i) => setIcon(i)}
      />
      <br />
      <Button
        margin={[50, 0, 0, 0]}
        color="#000000"
        disabled={username.length === 0 || repository.length === 0}
        onClick={() => {
          createLink({
            username,
            repository,
            icon,
            color,
          });
        }}
      >
        Create link
      </Button>
    </Wrapper>
  );
};

export default LinkCreator;
