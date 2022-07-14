import React, { useState } from 'react';
import { Typography, Button, Chip, Rating } from 'components';
import ChevronRight from 'public/icons/chevron-right.svg';
import ChevronDown from 'public/icons/chevron-down.svg';
import { withLayout } from '../layout/Layout';

const Home = () => {
  const [opened, setOpened] = useState(false);
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Typography variant="h1">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <Typography variant="h2">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <Typography variant="h3">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <Typography variant="h4">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <Typography variant="h5">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <Typography variant="h6">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <Typography variant="subtitle1">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <Typography variant="subtitle2">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae
        distinctio, dolor dolore esse exercitationem minima minus perferendis
        quidem saepe. Accusantium corporis debitis deleniti laudantium omnis
        quisquam totam! Beatae, magnam.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        aperiam aspernatur dicta enim facere id iste iure mollitia
        necessitatibus nemo omnis pariatur qui quibusdam, quidem saepe, sapiente
        ullam unde vero!
      </Typography>
      <Typography variant="body3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate,
        deleniti dignissimos doloremque eum impedit laudantium placeat, sint
        tempore, temporibus vero voluptas. At autem deserunt enim facere libero
        quisquam saepe?
      </Typography>

      <Button
        appearance="primary"
        endIcon={opened ? <ChevronDown /> : <ChevronRight />}
        onClick={() => setOpened((prevState) => !prevState)}
      >
        Button
      </Button>

      <Chip color="primary" variant="outlined">
        Chip
      </Chip>

      <Chip color="primary" variant="filled">
        Chip
      </Chip>

      <Chip color="green" variant="outlined">
        Chip
      </Chip>

      <Chip color="green" variant="filled">
        Chip
      </Chip>

      <Chip color="red" variant="outlined">
        Chip
      </Chip>

      <Chip color="red" variant="filled">
        Chip
      </Chip>

      <Chip variant="filled" size="s">
        Chip
      </Chip>

      <Chip variant="outlined">
        <a href="#">Chip</a>
      </Chip>

      <Rating rating={rating} setRating={setRating} isEditable />
    </>
  );
};

export default withLayout(Home);
