import {Router} from "express";
import {authenticateUser} from "../middleware/auth.middleware";
import {commentController} from "../controllers/comments.controller";

export const commentRoutes = Router();


// all user are able to see comments
commentRoutes.get(
  "/groups/:group_id/chores/:chore_id/comments",
  authenticateUser,
  commentController.getAllCommentsByChoreId
);

// all user are able to see comments
commentRoutes.get(
  "/groups/:group_id/chores/:chore_id/comments/:comment_id",
  authenticateUser,
  commentController.getCommentByCommentId
);

// for users to create a comment
commentRoutes.post(
  "/groups/:group_id/chores/:chore_id/comments",
  authenticateUser,
  commentController.createComment);

// for users to delete a comment
commentRoutes.delete(
  "/groups/:group_id/chores/:chore_id/comments/:comment_id",
  authenticateUser,
  commentController.deleteCommentById);


