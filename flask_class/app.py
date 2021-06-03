from flask import Flask, render_template, request, session, redirect, url_for, flash
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

app = Flask(__name__)

app.config['SECRET_KEY'] = 'mysecretkey'

class SimpleForm(FlaskForm):

    submit = SubmitField("Submit")
    breed = StringField("Breed")

@app.route('/', methods=['GET', 'POST'])
def index():
    form = SimpleForm()
    
    if form.validate_on_submit():
        session['breed'] = form.breed.data
        flash(f'You just clicked the button! And got {session["breed"]}')

        return redirect(url_for('index'))

    return render_template('home.html', form=form)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)