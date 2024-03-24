import { Blogs } from "../hooks";
import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blogs }) => {
  return (
    <div>
      <Appbar />
      <div className="justify-center flex">
        <div className="grid grid-cols-12 w-full px-10 pt-200 max-w-screen-2xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd December 2023</div>
            <div className="pt-4">{blog.content}</div>
          </div>

          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author :</div>
            <div className="flex">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous"} size="large" />
              </div>

              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catchprase about the author or blog..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
