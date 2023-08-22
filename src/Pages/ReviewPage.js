import { Rating, Typography } from "@material-tailwind/react";
import React from "react";
import { useLocation } from "react-router-dom";
function ReviewPage({ title, rating, content }) {
  const location = useLocation();
  const { name, review, reviewer_name } = location.state.reviews;

  console.log(location);
  return (
    <div className="text-white px-72 mt-24">
      <div className="title lato-font text-6xl font-bold text-center">
        OMG 2 Movie Review
      </div>
      <div className="rating mt-4 flex justify-between items-center">
        <div>
          <Typography
            color="blue-gray"
            className="text-white font-medium lato-font font-semibold mb-2"
          >
            Critic's Rating :
          </Typography>
          <Rating value={4} readonly />
        </div>
        <div className="author mt-2 text-xl">By {reviewer_name}</div>
      </div>
      <div className="p-8 reveiw text-xl text-black rounded-lg font-normal mt-12 bg-white">
        <strong>OMG 2 Story:</strong> A diehard bhakt of Lord Shiva, Kanti
        Sharan Mudgal (Pankaj Tripathi) is forced to question his own thoughts
        and societal norms on morality, religion and sex after his son gets
        expelled from school on grounds of obscenity.
        <br></br>
        <strong>OMG 2 Review:</strong> A video by an anonymous person captures
        Kanti’s troubled teen son Vivek, masturbating (‘selfie’ as a slang) in
        the school washroom. Once the video goes viral, the school expels Vivek
        (a brilliant Aarush Varma) to salvage its image and reputation. Ashamed
        of his son’s vulgar act and fearing the public outrage, Kanti decides to
        flee with his family to an undisclosed location. His son’s suicide
        attempts and declining mental health owing to humiliation and bullying,
        compel him to open his eyes and question his own understanding of being
        a parent and an adult. Religious and God-fearing Kanti decides to sue
        the school for the mental harassment caused to his son. He holds the
        elite educational institution accountable for being negligent towards
        their student’s need for sex education and right to information. The
        school appoints English speaking Kamini Maheshwari (Yami Gautam) as
        their defence lawyer. The latter argues that ‘masturbation is a sin’,
        our conservative society isn’t ready for sex education yet and there's a
        reason why private parts are called private. Their contradicting views
        and verbal exchange in court in front of a rather delightful judge
        (Pavan Malhotra as Judge Purushottam Nagar) forms the story. The film
        does take a few liberties in depiction of the court proceedings. You can
        even tell who's winning the legal battle fought on moral grounds but
        it's still quite interesting. It’s rare for sequels to outshine the
        original and writer-director Amit Rai’s clever and crisp courtroom
        comedy fulfils this mammoth task. A spiritual sequel to Umesh Shukla’s
        OMG – Oh My God! (2012), OMG 2 hits the nail on the head while
        addressing a rather sensitive topic. Funny, fearless and entertaining,
        Rai doesn’t play safe. His writing challenges the status quo and yet
        upholds the sanctity of religion, dignity and India’s family values. His
        language is desi and voice, progressive. The social dramedy dares to
        begin a dialogue and conversation perceived as awkward. It calls out the
        parental flaws that have been long buried under the garb of culture.
        Most importantly, it’s a courageous attempt to understand the unspoken
        distance between desi parents and their children. How many of us are
        comfortable watching a lovemaking scene in a movie in front of our
        parents? Why are vagina and penis given names and not addressed as
        vagina and penis! Why is there no talk on the menstrual cycle in
        schools? Porn is accessible freely on the internet but sex education is
        a taboo. Women can perhaps be safer in the country if men know more
        about their sexual needs and boundaries? The first half is more gripping
        but through its 2 hours, 36 minutes runtime, the narrative doesn't get
        preachy or sluggish. Akshay Kumar, who had a cameo in the previous film,
        gets a larger part to play here as the messenger of God (altered from
        playing God to his messenger after the CBFC modification). There are at
        least 27 modifications made for Indian viewing so expect weird dubbing
        in parts. The A rating is an issue given how important this film is for
        families and teenagers. OMG 2 boasts of a talented ensemble cast. Pankaj
        Tripathi is excellent as a father torn between guilt and anger. Akshay’s
        starry presence and hippie look make an impression. He humming ‘Udd jaa
        Kaale Kaava’ of Gadar is a chef’s kiss, since the two films (Gadar 2 and
        OMG 2) clash at the box office. Yami Gautam is sincere but the attempt
        to project her as a menacing lawyer by resorting to over the shoulder
        camera angles don’t work. OMG2 shows you how a film can be entertaining,
        socially relevant and informative. You don’t need to leave your brain
        behind to have a good laugh. Take your family along to watch this
        interesting blend of social commentary and humour.
      </div>
    </div>
  );
}

export default ReviewPage;
