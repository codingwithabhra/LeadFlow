import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLeadContext } from "../../contexts/useLeadContext";
import { BASE_URL } from "../../config/Config";
import { useParams } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import "./Comments.css";

const Comments = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const { users } = useLeadContext();
  const { leadId } = useParams();

  console.log("This is from comment part", leadId);

  // Fetch comments
  const fetchComments = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/comment/lead/${leadId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComments(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.log(err.response?.data?.message || err.message);
      setComments([]);
    }
  };

  useEffect(() => {
    if (leadId) {
      fetchComments();
    }
  }, [leadId]);

  // Submit comment
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      toast.error("Please enter a comment");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const newComment = {
        lead: leadId,
        commentText: commentText.trim(),
      };

      await axios.post(`${BASE_URL}/comment`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCommentText("");

      await fetchComments();

      toast.success("Comment submitted successfully");
    } catch (error) {
      console.log(error.response?.data?.message || "Failed to add comment");

      toast.error(error.response?.data?.message || "Failed to add comment");
    }
  };

  // to display time and date
  const formatCommentDate = (date) => {
    const formattedDate = new Date(date);

    const time = formattedDate.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const datePart = formattedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return `${time.toLowerCase()} / ${datePart}`;
  };

  return (
    <>
      <div className="container-fluid bg-white p-4 rounded shadow-sm">
        <h2 className="text-secondary fs-2">Comments</h2>
        <hr />

        {/* Existing Comments */}
        <div className="comments-container">
          {comments.map((cmnt) => {
            return (
              <div
                key={cmnt._id}
                className="mb-3 px-3 py-2 rounded"
                style={{ background: "rgba(208, 240, 192, 0.6)" }}
              >
                {/* client info */}
                <div className="d-flex align-items-center justify-content-between flex-wrap mb-1">
                  <p className="mb-1 d-flex align-items-center">
                    <span
                      className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center me-2"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      {cmnt.author?.profilePicture ? (
                        <img
                          src={cmnt.author.profilePicture}
                          alt={cmnt.author?.name || "User"}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <MdAccountCircle size={20} color="#6c757d" />
                      )}
                    </span>
                    <span className="fw-bold">
                      {cmnt.author?.name || "Unknown User"} :{" "}
                    </span>
                  </p>
                  <p
                    className="mb-0 text-secondary"
                    style={{ fontSize: "10px" }}
                  >
                    ({formatCommentDate(cmnt.updatedAt)})
                  </p>
                </div>
                <p
                  className="text-dark ms-4 px-3 py-1 rounded"
                  style={{ background: "rgba(208, 240, 192, 1)" }}
                >
                  {cmnt.commentText}
                </p>
              </div>
            );
          })}
        </div>

        <div className="addNewComment">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Enter your comment here..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={2} // you can adjust height
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-dark w-70 d-block m-auto">
              Add Comment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
