import React from 'react'

const ReviewItem = ({ review }) => {
    const reviewDate = new Date(review.created_at);
    const currentDate = new Date();
  
    // Farkı hesapla
    const diffInTime = currentDate.getTime() - reviewDate.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);
  
    let timePassedString;
  
    // Koşullara göre en uygun zaman dilimini seç
    if (diffInYears > 0) {
      timePassedString = `${diffInYears} yıl önce`;
    } else if (diffInMonths > 0) {
      timePassedString = `${diffInMonths} ay önce`;
    } else if (diffInDays > 0) {
      timePassedString = `${diffInDays} gün önce`;
    } else {
      timePassedString = "Bugün";
    }
  
    return (
      <div>
        <p>{timePassedString}</p>
      </div>
    );
  };
  
  export default ReviewItem;