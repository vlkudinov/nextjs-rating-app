import { FirstLevelMenuItem } from "../interface/menu.interface";
import CoursesIcon from "../components/Menu/icons/courses.svg";
import { TopLevelCategory } from "../interface/page.interface";
import ServicesIcon from "../components/Menu/icons/services.svg";
import BooksIcon from "../components/Menu/icons/books.svg";
import ProductsIcon from "../components/Menu/icons/products.svg";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];
