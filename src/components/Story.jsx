import Frame from './Frame.jsx'
import roomPrepared from '../assets/room-prepared.jpg'
import storefront from '../assets/storefront.jpg'

export default function Story() {
  return (
    <section className="story" id="about">
      <div className="split">
        <Frame
          variant="f2"
          round
          src={storefront}
          alt="The MCD Ellix Massage and Spa storefront at night, glowing with warm lights"
        />
        <div>
          <p className="eyebrow accent rv">Our promise</p>
          <h2 className="display rv d1">
            Live well, <span className="script">take care of yourself</span>
          </h2>
          <p className="caps rv d2">
            Rest isn't a luxury — it's how you keep going. Step in from the
            street, put your phone away and let our therapists ease the tension
            you have been carrying. You'll leave relaxed, rejuvenated and
            restored.
          </p>
        </div>
      </div>
      <div className="split rev">
        <Frame
          variant="f1"
          src={roomPrepared}
          alt="Massage bed prepared with a folded MCD Ellix towel, rolled towel flower and eye mask"
          tag="every detail, prepared for you"
        />
        <div>
          <p className="eyebrow accent rv">Our practice</p>
          <h2 className="display rv d1">
            Made for <span className="script">your comfort</span>
          </h2>
          <p className="caps rv d2">
            At MCD Ellix, your session is all about you. Choose from
            Swedish, Shiatsu and traditional Filipino Hilot massage, or add
            Ventosa, hot stone, ear candling, body scrubs and salting. Our
            private rooms are warm, softly lit and ready the moment you arrive.
          </p>
        </div>
      </div>
    </section>
  );
}
