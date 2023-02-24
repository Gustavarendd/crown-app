import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { DirectoryCategory } from '../directory/directory.component';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';

type directoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<directoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
