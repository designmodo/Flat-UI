/* ===========================================================
 * flatui-fileinput v0.1.0
 * Based on Bootstrap: fileinput.js v3.0.0-p7
 * http://jasny.github.com/bootstrap/javascript.html#fileinput
 * ===========================================================
 */

+function ($) { "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // FILEUPLOAD PUBLIC CLASS DEFINITION
  // =================================

  var Fileupload = function (element, options) {
    this.$element = $(element)
      
    this.$input = this.$element.find(':file')
    if (this.$input.length === 0) return

    this.name = this.$input.attr('name') || options.name

    this.$hidden = this.$element.find('input[type=hidden][name="'+this.name+'"]')
    if (this.$hidden.length === 0) {
      this.$hidden = $('<input type="hidden" />')
      this.$element.prepend(this.$hidden)
    }

    this.$preview = this.$element.find('.fileinput-preview')
    var height = this.$preview.css('height')
    if (this.$preview.css('display') != 'inline' && height != '0px' && height != 'none') this.$preview.css('line-height', height)

    this.original = {
      exists: this.$element.hasClass('fileinput-exists'),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    }
    
    this.inline_flag = this.$element.find('.input-group').length;
    
    if (this.inline_flag) {
	    this.$change = this.$element.find('[data-role="change"]');
	    this.$select_file = this.$element.find('[data-role="select-file"]');
    }    
    
    this.listen()
  }
  
  Fileupload.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))
    
    if (this.inline_flag) {	    
	    this.$element.on('mousemove.bs.fileinput', $.proxy(this.checkmove, this))
	    						 .on('mouseout.bs.fileinput', $.proxy(this.resetControlsClass, this))
	    						 .on('mousedown.bs.fileinput', $.proxy(this.activateControls, this))
    }     
    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this));
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this));       
  },

  Fileupload.prototype.change = function(e) {
    if (e.target.files === undefined) e.target.files = e.target && e.target.value ? [ {name: e.target.value.replace(/^.+\\/, '')} ] : []
    if (e.target.files.length === 0) return

    this.$hidden.val('')
    this.$hidden.attr('name', '')
    this.$input.attr('name', this.name)

    var file = e.target.files[0]

    if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match('image.*') : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
      var reader = new FileReader()
      var preview = this.$preview
      var element = this.$element

      reader.onload = function(re) {
        var $img = $('<img>') // .attr('src', re.target.result)
        $img[0].src = re.target.result
        e.target.files[0].result = re.target.result
        
        element.find('.fileinput-filename').text(file.name)
        
        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
        if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))
        
        preview.html($img)
        element.addClass('fileinput-exists').removeClass('fileinput-new')

        element.trigger('change.bs.fileinput', e.target.files)
      }

      reader.readAsDataURL(file)
    } else {
      this.$element.find('.fileinput-filename').text(file.name)
      this.$preview.text(file.name)
      
      this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
      
      this.$element.trigger('change.bs.fileinput')
    }
  },

  Fileupload.prototype.clear = function(e) {
    if (e) e.preventDefault()
    
    this.$hidden.val('')
    this.$hidden.attr('name', this.name)
    this.$input.attr('name', '')

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) { 
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    this.$preview.html('')
    this.$element.find('.fileinput-filename').text('')
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    if (e !== false) {
      this.$input.trigger('change')
      this.$element.trigger('clear.bs.fileinput')
    }
  },

  Fileupload.prototype.reset = function() {
    this.clear(false)

    this.$hidden.val(this.original.hiddenVal)
    this.$preview.html(this.original.preview)
    this.$element.find('.fileinput-filename').text('')

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
     else this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    this.$element.trigger('reset.bs.fileinput')
  },
  
  Fileupload.prototype.checkmove = function(e) {
  	var select_file_pos = this.$select_file.offset()["left"],
  			change_pos = this.$change.offset()["left"];
	  if (this.$change.is(":hidden")) {
		  if (e.pageX > select_file_pos && e.pageX < select_file_pos + this.$select_file.width()) {
			  this.$select_file.addClass("hover");
		  } else {
			  this.$select_file.removeClass("hover");
		  }
	  } else {
		  if (e.pageX > change_pos && e.pageX < change_pos + this.$select_file.width()) {
			  this.$change.addClass("hover");
		  } else {
			  this.$change.removeClass("hover");
		  }
	  }
  },
  
  Fileupload.prototype.activateControls = function () {
	  if (this.$change.is(":hidden")) {
		  this.$select_file.addClass("active");
	  } else {
		  this.$change.addClass("active")
	  }
  },
  
  Fileupload.prototype.resetControlsClass = function () {
	  this.$change.removeClass("hover active");
	  this.$select_file.removeClass("hover active");
  },

  Fileupload.prototype.trigger = function(e) {
    this.$input.trigger('click')
    e.preventDefault()
  }

  
  // FILEUPLOAD PLUGIN DEFINITION
  // ===========================

  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this)
      , data = $this.data('fileinput')
      if (!data) $this.data('fileinput', (data = new Fileupload(this, options)))
      if (typeof options == 'string') data[options]()
    })
  }

  $.fn.fileinput.Constructor = Fileupload


  // FILEUPLOAD DATA-API
  // ==================

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {      
    var $target = $(e.target).closest('[data-dismiss="fileinput"], [data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault()
      //$target.trigger('click.bs.fileinput')
    }
  });
  
  $(function () {
    $('[data-provides="fileinput"]').each(function () {
      var $this = $(this);
	    if ($this.data('fileinput')) return;
	    $this.fileinput($this.data());
    });
  });

}(window.jQuery);
