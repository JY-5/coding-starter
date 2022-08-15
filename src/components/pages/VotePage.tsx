import EXAMPLE_SUBMISSIONS, { Submission } from "constants/ExampleSubmissions";
import styles from "css/pages/VotePage.module.css";
import { useState } from "react";

export default function VotePage(): JSX.Element {
  const randomExample: Submission =
    EXAMPLE_SUBMISSIONS[Math.floor(Math.random() * EXAMPLE_SUBMISSIONS.length)];
  console.log(randomExample);

  const votesData = {};
  for (let submission of EXAMPLE_SUBMISSIONS) {
    votesData[submission.id] = [];
    votesData[submission.id][0] = {};
    votesData[submission.id][0].upvotes = {};
    votesData[submission.id][1] = {};
    votesData[submission.id][1].downvotes = {};
  }

  // If desired, utility fonts have been pre-defined in FontClasses.css
  const [submissionIdx, setSubmissionIdx] = useState(0);
  const [votes, setVotes] = useState(votesData);
  /*
  {submissionid: [{upvotes: {userid: userid}}, downvotes: {userid}]}
  */
  const submissionId = EXAMPLE_SUBMISSIONS[submissionIdx].id;

  const handleUpvote = () => {
      votes[submissionId].
  }

  return (
    <div className={styles.container}>
      <div className={styles.images}>
        {EXAMPLE_SUBMISSIONS[submissionIdx].assets.map((asset, idx) => (
          <img key={idx} src={asset.src} className={styles.image} />
        ))}
      </div>
      <p>{EXAMPLE_SUBMISSIONS[submissionIdx].name}</p>
      <p>{`Author: ${EXAMPLE_SUBMISSIONS[submissionIdx].userFullname}`}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button>Downvote</button>
    </div>
  );
}
