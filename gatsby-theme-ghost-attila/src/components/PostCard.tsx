import React from "react";
import { Link } from "gatsby";
import randomColor from "randomcolor";
import { GhostPostDescription } from "../models/all-post-description.model";

type PostCardTypes = {
  post: GhostPostDescription;
};

const PostCard: React.FC<PostCardTypes> = ({ post }) => {
  const excerpt =
    post.excerpt.split(" ").length > 30
      ? post.excerpt.split(" ").slice(0, 30).join(" ") + "..."
      : post.excerpt;
  return (
    <Link
      to={`/${post.slug}`}
      className="w-full lg:w-1/3 px-4 mb-8 cursor-pointer"
    >
      <div className="h-full rounded shadow-md flex flex-col justify-between">
        <div>
          {post.feature_image && (
            <img
              className="mb-4 h-48 w-full object-cover rounded-t"
              src={post.feature_image}
            />
          )}
          {!post.feature_image && (
            <div
              className="flex justify-center items-center text-white font-black mb-4 h-48 w-full object-cover rounded-t"
              style={{
                backgroundColor: randomColor({
                  luminosity: "light",
                }),
                fontSize: "6rem",
              }}
            >
              {post.title[0]}
            </div>
          )}

          <div className="px-6">
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                {post.updated_at}
                <span className="mx-2">•</span>
                <span className="text-gray-600">
                  {post.tags.map((tag, i) => {
                    return (
                      <a
                        key={i}
                        className="no-underline hover:underline mr-2"
                        href="/tag.html"
                      >
                        {tag.name}
                      </a>
                    );
                  })}
                </span>
              </p>
              <h3 className="text-2xl my-2 font-heading font-semibold tracking-tight leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-600 font-serif">{excerpt}</p>
            </div>
          </div>
        </div>
        <div className="my-4 flex justify-between px-6">
          <a
            className="text-gray-600 no-underline hover:underline"
            href="/author.html"
          >
            <small>{post.primary_author.name}</small>
          </a>
          {post.reading_time ? (
            <small className="text-gray-500">
              {post.reading_time} min read
            </small>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
