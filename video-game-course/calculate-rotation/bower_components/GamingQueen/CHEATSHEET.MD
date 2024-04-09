### Releasing

To release your library to `bower` initially:

1. Save your changes to the `index.js` file.
2. `git add -A`
3. `git commit -m "* add makeBody method"`
4. `git tag -a v0.0.1 -m "init"`
5. `git push origin main --tags`.  **DON'T FORGET --tags**

<hr>

### Updating 

To re-release your library to `bower`:

1. Save your changes to the `index.js` file.
2. Open up the `bower.json` file, and increment the version number, from `0.1.0` to `0.2.0` (or from its previous version to the next version). Save the file.
3. `git add -A`
4. `git commit -m "<message that describes changes>"`
5. `git tag -a v0.1.0 -m "<message that describes changes>"`
6. `git push origin main --tags`.  **DON'T FORGET --tags

References:

* <a href="http://bob.yexley.net/creating-and-maintaining-your-own-bower-package/" target="_blank">Creating & Maintaining Your Own Bower Package</a>
* <a href="https://git-scm.com/book/en/v2/Git-Basics-Tagging" target="_blank">Git Tagging</a>
(function(window, _) {
  window.gamz = window.gamz || {
    numz: {/* other code */},
    phyz: {
      /**
       * Returns an Object with basic properties utilized in a 
       * 2D physics system. On top of simple physical properties,
       * the body has template methods handleCollision() and update().
       * 
       * @param {String} type: A String, should be unique to your
       * system, representing the type of body.
       * @param {Object} options.
       * @param {Number} options.velocityX: The body's velocity on the x axis.
       * @param {Number} options.velocityY: The body's velocity on the y axis.
       * @param {Number} options.rotationalVelocity: The body's rotational velocity.
       * @param {Number} options.integrity: The body's integrity. 0 means the 
       * body is no longer intact and should explode or break apart, 1 means 
       * the body is fully intact.
       * @param {Number} options.density: The density of the body, can be 
       * used when calculating the force of impact of a collision, which can 
       * then be distributed to affect the kinetic energy of the colliding bodies.
       * @param {Number} options.volatility: The body's volatility, how unstable or
       * explosive it may be. Can be used as a multiplyer when calculating the 
       * force of impact of a collision.
       * @return {Object} The body.
       */
      makeBody: function(type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
        return {
          type: type,
          velocityX: velocityX,
          velocityY: velocityY,
          rotationalVelocity: rotationalVelocity,
          integrity: integrity,
          density: density,
          volatility: volatility,

          /**
           * @param {Number} A number representing the force of the impact.
           * @param {Object} The other body involved in the collision.
           */
          handleCollision(impact, body) {
            // template method //
          },

          /**
           * Can be overridden in the concrete body to provide a custom update()
           * method.
           */
          update(event) {
            // template method //
          }
        };
      },
    },
  };
}(window, window._));