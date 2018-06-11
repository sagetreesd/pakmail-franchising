/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {
      $('.dropdown').on('mouseenter mouseleave', function (e) {
        var dropdown = $(this);
        var _d = dropdown.find('.dropdown-toggle-split');
        var _dm = dropdown.find('.dropdown-menu');
        var hover = $(this).is(':hover');
        dropdown[hover ? 'addClass' : 'removeClass']('show');
        _d.attr('aria-expanded', hover);
        _dm[hover ? 'addClass' : 'removeClass']('show');
      });

      // Get rid of that pesky bottom border in each column
      // of the menu.
      $('.dropdown .dropdown-menu').each(function (k, v) {
        var children = $(this).find('.dropdown-item');
        if (children.length > 5) {
          $(this).addClass('column-split');
          var half = Math.ceil(children.length / 2) - 1;
          $(children[half]).addClass('bottom');
        }
      });
    }
  };

})(jQuery, Drupal);
