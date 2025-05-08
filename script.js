// وظيفة البحث
document.getElementById('searchButton')?.addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const hotels = document.querySelectorAll('.hotel-card');
    hotels.forEach(hotel => {
        const hotelName = hotel.querySelector('h3').textContent.toLowerCase();
        if (hotelName.includes(searchTerm)) {
            hotel.style.display = 'block';
        } else {
            hotel.style.display = 'none';
        }
    });
});

// تفعيل أكورديون الأسئلة الشائعة
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
        // إغلاق الباقي إذا أردت فتح واحد فقط في كل مرة:
        // faqItems.forEach(other => { if(other !== item) other.classList.remove('active'); });
    });
}); 