from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        exclude = ['replied', 'created_by', 'created_date']

    def __init__(self, *args, **kwargs):
        super(ContactForm, self).__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({
            'class': 'form-control'
        })
        self.fields['email'].widget.attrs.update({
            'class': 'form-control'
        })
        self.fields['subject'].widget.attrs.update({
            'class': 'form-control'
        })
        self.fields['message'].widget.attrs.update({
            'class': 'form-control',
            'rows': 7
        })
