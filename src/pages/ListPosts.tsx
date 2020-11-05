import React from "react";

import "../styles/pages/list-posts.css";
import { FiAlignLeft, FiSearch } from "react-icons/fi";

import Thumbnail from "../images/post1.jpeg";

function ListPosts() {
  return (
    <>
      <header className="main-header">
        <FiAlignLeft className="search-icon" size={36} />
        <input type="text" placeholder="Search your post..." />
        <h1>Blog do Sued</h1>
        <FiSearch size={24} />
      </header>

      <section id="posts-container">
        <article
          style={{
            backgroundImage: `url(${Thumbnail})`,
            backgroundSize: "cover",
          }}
          className="post"
        >
          <div className="post-resume">
            <h3>
              <a href="/#">Como cuidar das plantinhas e ser feliz</a>
            </h3>
            <span className="post-user">
              <figure>
                <img src={Thumbnail} alt="foto do postador" />
              </figure>
              Plubished from <a href=""> Karoline Karol</a>
            </span>
            <p className="category">Plantas</p>
            <p className="post-date">13 Ago 2020</p>
          </div>
        </article>

        <article
          style={{
            backgroundImage: `url(${Thumbnail})`,
            backgroundSize: "cover",
          }}
          className="post"
        >
          <div className="post-resume">
            <h3>
              <a href="/#">Como cuidar das plantinhas e ser feliz</a>
            </h3>
            <span className="post-user">
              Plubished from <a href=""> Karoline Karol</a>
            </span>
            <p className="category">Plantas</p>
            <p className="post-date">13 Ago 2020</p>
          </div>
        </article>

        <article
          style={{
            backgroundImage: `url(${Thumbnail})`,
            backgroundSize: "cover",
          }}
          className="post"
        >
          <div className="post-resume">
            <h3>
              <a href="/#">Como cuidar das plantinhas e ser feliz</a>
            </h3>
            <span className="post-user">
              Plubished from <a href=""> Karoline Karol</a>
            </span>
            <p className="category">Plantas</p>
            <p className="post-date">13 Ago 2020</p>
          </div>
        </article>
        <article
          style={{
            backgroundImage: `url(${Thumbnail})`,
            backgroundSize: "cover",
          }}
          className="post"
        >
          <div className="post-resume">
            <h3>
              <a href="/#">Como cuidar das plantinhas e ser feliz</a>
            </h3>
            <span className="post-user">
              Plubished from <a href=""> Karoline Karol</a>
            </span>
            <p className="category">Plantas</p>
            <p className="post-date">13 Ago 2020</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default ListPosts;
