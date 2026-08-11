/**
 * PatPlacer - Popup Script
 * Handles popup UI logic
 */

(function() {
  'use strict';

  // Check if we're on openplace.live
  async function checkStatus() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const isOpenplace = tab?.url?.includes('openplace.live');
      
      const indicator = document.querySelector('.status-indicator');
      const text = document.querySelector('.status-text');
      
      if (isOpenplace) {
        indicator.classList.remove('inactive');
        indicator.classList.add('active');
        text.textContent = 'Ready on openplace.live';
      } else {
        indicator.classList.remove('active');
        indicator.classList.add('inactive');
        text.textContent = 'Not on openplace.live';
      }
    } catch (error) {
      console.error('Error checking status:', error);
    }
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', checkStatus);
})();
