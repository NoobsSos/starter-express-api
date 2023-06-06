import '../../Styles/main/reviews.css';
// import reviewItemOne from '../../img/reviewOne';
// import reviewItemTwo from '../../img/reviewTwo';
// import reviewItemThree from '../../img/reviewThree';
// import reviewItemFour from '../../img/reviewFour';

import reviewItemOne from '../../img/reviewOne.jpg';
import reviewItemTwo from '../../img/reviewTwo.jpg';
import reviewItemThree from '../../img/reviewThree.jpg';
import reviewItemFour from'../../img/reviewFour.jpg';
import reviewItemFive from'../../img/reviewFive.jpg';


const Reviews = () => {
  return ( 
    <div className='reviews'>
    <h2 className='title-reviews'>
      <span className='black-reviews'>Re</span>views
    </h2>
    <div className='block-reviews'>
      <div className='review-item'>
        <div className='image-review'>
          <img src= {reviewItemFive} alt="" ></img>
        </div>
        <div className='text-review'>
          <div className='log-review'>
            <h3 className='log-review-item'>
            Yana
            </h3>
          </div>
          <div className='description-review'>
            <p>"Зручна у використанні платформа, швидко знайшов наставника. Дякую!"</p>
          </div>
        </div>
      </div>
      <div className='review-item'>
        <div className='image-review'>
          <img src= {reviewItemTwo} alt="" ></img>
        </div>
        <div className='text-review'>
          <div className='log-review'>
            <h3 className='log-review-item'>
            Stepan
            </h3>
          </div>
          <div className='description-review'>
            <p>"Наставник, з яким я працював, був дуже терплячий та знаючий. Я рекомендую цей сайт всім, хто шукає якісну допомогу в навчанні."</p>
          </div>
        </div>
      </div>
      <div className='review-item'>
        <div className='image-review'>
          <img src= {reviewItemThree} alt="" ></img>
        </div>
        <div className='text-review'>
          <div className='log-review'>
            <h3 className='log-review-item'>
            Karina
            </h3>
          </div>
          <div className='description-review'>
            <p>"Заняття проходять дуже продуктивно, і я відчуваю, що роблю значний прогрес."</p>
          </div>
        </div>
      </div>
      <div className='review-item'>
        <div className='image-review'>
          <img src= {reviewItemFour} alt="" ></img>
        </div>
        <div className='text-review'>
          <div className='log-review'>
            <h3 className='log-review-item'>
            Мирослава
            </h3>
          </div>
          <div className='description-review'>
            <p>"Я дуже задоволений заняттями з наставником на цьому сайті! Вона дуже професійна, мої знання зросли у декілька раз"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
   );
}
 
export default Reviews;