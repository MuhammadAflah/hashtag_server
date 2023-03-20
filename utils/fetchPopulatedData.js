import Post from "../models/Post.js";

export const fetchFindByIdData =async (id,data)=>{
    const populatedPost=await Post.findById(id,data)
      .populate("author", "firstName lastName picturePath")
      .populate("comments.author", "firstName lastName picturePath")
      .sort({ createdAt: -1 })
      .exec();

      return populatedPost
}
export const fetchFindData =async (data)=>{
    const populatedPost = await Post.find(data)
      .populate("author", "firstName lastName picturePath")
      .populate("comments.author", "firstName lastName picturePath")
      .exec();

      return populatedPost
}