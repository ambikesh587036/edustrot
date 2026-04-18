// Tailwind Script
tailwind.config = {
  content: [],
  theme: {
    extend: {}
  }
}

// Fake Resources Data
const resources = [
  { id:1, title:"Engineering Mathematics - Kreyszig", category:"Books", location:"Indore", img:"https://picsum.photos/id/201/400/300" },
  { id:2, title:"Digital Logic Design Kit", category:"Tools", location:"Indore", img:"https://picsum.photos/id/180/400/300" },
  { id:3, title:"Handwritten OS Notes (Sem 5)", category:"Notes", location:"Indore", img:"https://picsum.photos/id/1005/400/300" },
  { id:4, title:"Arduino Starter Kit", category:"Lab Equipment", location:"Indore", img:"https://picsum.photos/id/133/400/300" },
  { id:5, title:"Physics Lab Manual", category:"Books", location:"Indore", img:"https://picsum.photos/id/1015/400/300" }
];

// Render Resources
function renderResources(filtered) {
  const grid = document.getElementById('resourcesGrid');
  grid.innerHTML = '';
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-3xl overflow-hidden shadow card-hover';
    card.innerHTML = `
      <img src="${item.img}" class="w-full h-56 object-cover">
      <div class="p-6">
        <span class="bg-blue-100 text-blue-700 text-xs px-4 py-1 rounded-full">${item.category}</span>
        <h4 class="font-semibold text-xl mt-4">${item.title}</h4>
        <p class="text-gray-500 flex items-center gap-2 mt-3"><i class="fa-solid fa-map-marker-alt"></i> ${item.location}</p>
        <button onclick="claimResource(${item.id})"
                class="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold">Claim / Connect</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Search
document.getElementById('searchInput').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = resources.filter(r =>
    r.title.toLowerCase().includes(term) || r.category.toLowerCase().includes(term)
  );
  renderResources(filtered.length ? filtered : resources);
});

// Share Modal
function showShareModal() {
  document.getElementById('shareModal').classList.remove('hidden');
  document.getElementById('shareModal').classList.add('flex');
}
function hideShareModal() {
  document.getElementById('shareModal').classList.add('hidden');
  document.getElementById('shareModal').classList.remove('flex');
}
document.getElementById('shareForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('🎉 Resource successfully shared on Edustrot! Students will connect soon.');
  hideShareModal();
  renderResources(resources);
});

// Fake Claim
function claimResource(id) {
  alert(`✅ You have successfully connected for resource ID ${id}! Chat will open soon.`);
}

// Mobile Menu
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

// Fake Login/Signup
function showLogin() { alert('🔐 Login page would open here (demo)'); }
function showSignup() { alert('🚀 Signup successful! Welcome to Edustrot family ❤️'); }

// Initial Load
window.onload = () => {
  renderResources(resources);
  console.log('%c✅ Edustrot by Ambikesh loaded successfully!', 'color:#3b82f6; font-size:18px; font-weight:bold');
};
