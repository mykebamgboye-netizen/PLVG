self.addEventListener('push', function(event) {
  let data = {}
  try { data = event.data.json() } catch(e) { data = { title: 'PluggedIn', body: 'You have a new notification' } }
  const title = data.title || 'PluggedIn'
  const options = {
    body: data.body || '',
    icon: '/icons/icon-192.png',
    badge: '/icons/badge-72.png',
    data: data.url || '/'
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', function(event) {
  event.notification.close()
  const url = event.notification.data || '/'
  event.waitUntil(clients.openWindow(url))
})
