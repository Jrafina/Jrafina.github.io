const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  // autoplay: true,
  audio: [
    {
      name: '起风了',
      artist: '买辣椒也用券',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0ViNGFNWDQ1RDRCQnNMalFONGlmQVVjQkZMa2ZhaVBKU2w3eGNMRk4wT1E2Ymc_ZT1oZzBiVUs.mp3',
      cover: 'http://img4.kuwo.cn/star/albumcover/500/15/82/150990423.jpg',
    },
    {
      name: '把回忆拼好给你',
      artist: 'cici_',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VaWS1ERjVneW14SWhWX2lLWFh2b0tnQlhBblNHZmE1NUdZU3EwM2c1MV9hZ1E_ZT1sNmdVMzI.mp3',
      cover: 'http://img4.kuwo.cn/star/albumcover/500/7/22/3737107551.jpg',
    },
    {
      name: 'Wonderful U',
      artist: 'AGA',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VkVjd1Zk05TzZCTHBVMWNROXRQclY4Qlc1M251Y0g5eV9wSGExVjZGdFFIVGc_ZT1LNFlicTU.mp3',
      cover: 'http://img3.kuwo.cn/star/starheads/500/8/92/3814852462.jpg',
    },
    {
      name: '勇气',
      artist: '棉子',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0ViOXp0UnNNWHRsS3VZN3RUa3RwM0FzQlNxRzhvai1IWWpzQ3ZyM3BqNzAydmc_ZT1kaHpIbG0.mp3',
      cover: 'http://img4.kuwo.cn/star/albumcover/500/24/91/3155287882.jpg',
    },
    {
      name: '冬眠',
      artist: '司南',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VUM2VzZGlQb0taRmpwOWtQb0Z1akRjQlRzVFZLMF9VbnhrSm80VnA5YWhwcHc_ZT1VRk1UZUs.mp3',
      cover: 'http://img3.kuwo.cn/star/albumcover/500/60/22/2445771895.jpg',
    },
    {
      name: '搁浅',
      artist: '周杰伦',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VhODZvSmVfMXRWTHJfQUVGUFlqUzBVQndISW5PUmVDMWo5elFjbXNXOUpIYUE_ZT1IRzNCa3o.mp3',
      cover: 'http://img2.kuwo.cn/star/albumcover/500/30/97/4276557883.jpg',
    },
    {
      name: '珊瑚海',
      artist: '周杰伦&Lara梁心颐',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VTTmU3UGJFMWhoTXNHd0YwTTBEaHd3QmV3clVpTG5udmh2V05XSUw0Y3c5M0E_ZT1xV010bUQ.mp3',
      cover: 'http://img3.kuwo.cn/star/albumcover/500/32/88/1567952196.jpg',
    },
    {
      name: '晴天',
      artist: '周杰伦',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VmbDVzcUJ6N21oQ3N6ZER3QW9rZ0FJQkw0WmNJN1RIOUM5a1VRV1Bpcm1VbFE_ZT0yekdVcVE.mp3',
      cover: 'http://img2.kuwo.cn/star/albumcover/500/s3s94/93/211513640.jpg',
    },
    {
      name: '七里香',
      artist: '周杰伦',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VkY3FNdXFOZ2ZKRWlUVy1ZeG1tQTRZQnBnb3p3Q1Jzc2NTY2RXeUMxb0k4YkE_ZT1RNmVnUE8.mp3',
      cover: 'http://img2.kuwo.cn/star/albumcover/500/30/97/4276557883.jpg',
    },
    {
      name: '她说',
      artist: '林俊杰',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VlVHZaS0Y5ZktWTms3dUpsSU9FNWNzQkZob1VXWGhQWDlIUU9keWFLb3ptWGc_ZT11YUNhT3U.mp3',
      cover: 'http://img1.kuwo.cn/star/albumcover/500/21/12/4189818596.jpg',
    },
    {
      name: '不为谁而做的歌',
      artist: '林俊杰',
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8wYjJiNzBkODBjZGNlYWI2L0VjdzVkdEpxdWJoT3BlSmk1WGEydjM0Qk1ZV2VENHU3OGpwdENxUWhvcjVuWUE_ZT1kWFNHUEw.mp3',
      cover: 'http://img4.kuwo.cn/star/albumcover/500/62/23/789477357.jpg',
    }
  ]
});