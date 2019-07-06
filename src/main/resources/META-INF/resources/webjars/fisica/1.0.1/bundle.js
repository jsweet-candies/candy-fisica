/* Generated from Java with JSweet 2.3.0 - http://www.jsweet.org */
var fisica;
(function (fisica) {
    /**
     * Represents a contact between two bodies.  Objects of this type are not created by the users.  Contacts are passed to the user when they implement the {@code contactStarted(FContact){ }}, {@code contactPersisted(FContact){ }} and {@code contactEnded(FContact){ }} methods in the applet:
     *
     *
     * <pre>
     * {@code
     * FWorld world;
     *
     * void setup() {
     * Fisica.init(this);
     *
     * world = new FWorld();
     * world.setEdges();
     *
     * // Create and add bodies to the world here
     * // ...
     * }
     *
     * void draw() {
     * world.step();
     * world.draw();
     * }
     *
     * void contactStarted(FContact contact) {
     * // Draw in green an ellipse where the contact took place
     * fill(0, 170, 0);
     * ellipse(contact.getX(), contact.getY(), 20, 20);
     * }
     *
     * void contactPersisted(FContact contact) {
     * // Draw in blue an ellipse where the contact took place
     * fill(0, 0, 170);
     * ellipse(contact.getX(), contact.getY(), 10, 10);
     * }
     *
     * void contactStarted(FContact contact) {
     * // Draw in red an ellipse where the contact took place
     * fill(170, 0, 0);
     * ellipse(contact.getX(), result.getY(), 20, 20);
     * }
     *
     * }
     * </pre>
     *
     * To know if the contact is the beggining, the continuation or the end of a contact it is better to use the other method {@code contactResult(FContactResult){ }}.
     *
     * @usage Contacts
     * @see FContactResult
     * @class
     */
    class FContact {
        constructor(contactPoint) {
            if (this.m_body1 === undefined)
                this.m_body1 = null;
            if (this.m_body2 === undefined)
                this.m_body2 = null;
            if (this.m_position === undefined)
                this.m_position = null;
            if (this.m_velocity === undefined)
                this.m_velocity = null;
            if (this.m_normal === undefined)
                this.m_normal = null;
            if (this.m_separation === undefined)
                this.m_separation = 0;
            if (this.m_friction === undefined)
                this.m_friction = 0;
            if (this.m_restitution === undefined)
                this.m_restitution = 0;
            if (this.m_id === undefined)
                this.m_id = null;
            this.m_position = new org.jbox2d.common.Vec2(contactPoint.position);
            this.m_velocity = new org.jbox2d.common.Vec2(contactPoint.velocity);
            this.m_normal = new org.jbox2d.common.Vec2(contactPoint.normal);
            this.m_separation = contactPoint.separation;
            this.m_friction = contactPoint.friction;
            this.m_restitution = contactPoint.restitution;
            let s1 = contactPoint.shape1;
            let s2 = contactPoint.shape2;
            this.m_body1 = s1.m_userData != null ? s1.m_userData : s1.getBody().getUserData();
            this.m_body2 = s2.m_userData != null ? s2.m_userData : s2.getBody().getUserData();
            this.m_id = new fisica.FContactID(new org.jbox2d.collision.ContactID(contactPoint.id), this.m_body1, this.m_body2);
        }
        /**
         * Returns the first body involved in the contact.
         * @return {fisica.FBody} first of the bodies involved in the contact
         */
        getBody1() {
            return this.m_body1;
        }
        /**
         * Returns the second body involved in the contact.
         * @return {fisica.FBody} second of the bodies involved in the contact
         */
        getBody2() {
            return this.m_body2;
        }
        /**
         * Returns the horizontal position of the contact point.
         *
         * @return {number} the horizontal position of the contact point in pixels
         * @see #getY
         */
        getX() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).x;
        }
        /**
         * Returns the vertical position of the contact point.
         *
         * @return {number} the vertical position of the contact point in pixels
         * @see #getX
         */
        getY() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).y;
        }
        /**
         * Returns the horizontal component of the contact velocity.
         *
         * @return {number} the horizontal component of the contact velocity
         * @see #getVelocityY
         */
        getVelocityX() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_velocity).x;
        }
        /**
         * Returns the vertical component of the contact velocity.
         *
         * @return {number} the vertical component of the contact velocity
         * @see #getVelocityX
         */
        getVelocityY() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_velocity).y;
        }
        /**
         * Returns the horizontal component of the contact normal.
         *
         * @return {number} the horizontal component of the contact normal
         * @see #getNormalY
         */
        getNormalX() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).x;
        }
        /**
         * Returns the vertical component of the contact normal.
         *
         * @return {number} the vertical component of the contact normal
         * @see #getNormalX
         */
        getNormalY() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).y;
        }
        /**
         * Get the separation between the bodies.
         *
         * @return {number} a positive value means that the bodies have space between them, negative values means that the bodies have penetrated each other
         */
        getSeparation() {
            return fisica.Fisica.worldToScreen$float(this.m_separation);
        }
        /**
         * Get the friction coefficient of the contact.  The friction determines the ratio of the reaction force tangent to a contact that the two bodies will recieve.  Basically it can be seen as a coefficient that will control how the bodies get slown down when they slide against each other.  This value depends on the friction coefficients of the two bodies involved in the contact.
         *
         * @return {number} a positive value.  A value of 0 means no friction and thus the body will not be slown down if no other forces are applied
         */
        getFriction() {
            return this.m_friction;
        }
        /**
         * Get the restitution coefficient of the contact.  The restitution determines the ratio of the reaction force normal to a contact that the two bodies will recieve.  Basically it can be seen as a coefficient that will control the strength with which the bodies bounce back from the collision.  This value depends on the resititution coefficients of the two bodies involved in the contact.
         *
         * @return {number} a positive value.  A value of 0 means no bounce after a collision, and a value of 1 means bounce with it's full speed from a collision
         */
        getRestitution() {
            return this.m_restitution;
        }
        /**
         * Get the identifier of the contact.  This value is useful in order to uniquely identify a contact.  A new contact ID is created whenever to bodies enter into contact at a given point.  If the bodies slide against each other the contact ID is maintained even if the point of contact is modified due to the slide.  As soon as the two bodies separate the contact is considered ended.
         *
         * @return {fisica.FContactID} a unique identifier representing the contact
         */
        getId() {
            return this.m_id;
        }
        contains$java_lang_String$java_lang_String(n1, n2) {
            if (this.getBody1() == null || this.getBody2() == null) {
                return false;
            }
            if (this.getBody1().getName() == null || this.getBody2().getName() == null) {
                return false;
            }
            return ((((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody1().getName(), n1) && ((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody2().getName(), n2)) || (((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody1().getName(), n2) && ((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody2().getName(), n1)));
        }
        /**
         * Returns true if the contact contains the two bodies.  If one of the bodies does not have a name this function returns false.
         *
         * @param {string} n1 the name of one of the bodies
         * @param {string} n2 the name of another one of the bodies
         * @return {boolean} true if the contact bodies have the names given by the parameters
         * @see FBody#setName
         */
        contains(n1, n2) {
            if (((typeof n1 === 'string') || n1 === null) && ((typeof n2 === 'string') || n2 === null)) {
                return this.contains$java_lang_String$java_lang_String(n1, n2);
            }
            else if (((n1 != null && n1 instanceof fisica.FBody) || n1 === null) && ((n2 != null && n2 instanceof fisica.FBody) || n2 === null)) {
                return this.contains$fisica_FBody$fisica_FBody(n1, n2);
            }
            else if (((typeof n1 === 'string') || n1 === null) && n2 === undefined) {
                return this.contains$java_lang_String(n1);
            }
            else if (((n1 != null && n1 instanceof fisica.FBody) || n1 === null) && n2 === undefined) {
                return this.contains$fisica_FBody(n1);
            }
            else
                throw new Error('invalid overload');
        }
        contains$fisica_FBody$fisica_FBody(n1, n2) {
            if (this.getBody1() == null || this.getBody2() == null) {
                return false;
            }
            return ((this.getBody1() === n1 && this.getBody2() === n2) || (this.getBody1() === n2 && this.getBody2() === n1));
        }
        contains$java_lang_String(n1) {
            if ((this.getBody1() != null) && (this.getBody1().getName() != null) && (((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody1().getName(), n1))) {
                return true;
            }
            if ((this.getBody2() != null) && (this.getBody2().getName() != null) && (((o1, o2) => { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody2().getName(), n1))) {
                return true;
            }
            return false;
        }
        contains$fisica_FBody(n1) {
            if ((this.getBody1() != null) && (this.getBody1() === n1)) {
                return true;
            }
            if ((this.getBody2() != null) && (this.getBody2() === n1)) {
                return true;
            }
            return false;
        }
    }
    fisica.FContact = FContact;
    FContact["__class"] = "fisica.FContact";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Provides default do-nothing implementations of all {@link FContactListener}
     * methods.
     * @class
     */
    class FContactAdapter {
        constructor() {
        }
        /**
         *
         * @param {fisica.FContact} contact
         */
        contactStarted(contact) {
        }
        /**
         *
         * @param {fisica.FContact} contact
         */
        contactPersisted(contact) {
        }
        /**
         *
         * @param {fisica.FContact} contact
         */
        contactEnded(contact) {
        }
        /**
         *
         * @param {fisica.FContactResult} result
         */
        contactResult(result) {
        }
    }
    fisica.FContactAdapter = FContactAdapter;
    FContactAdapter["__class"] = "fisica.FContactAdapter";
    FContactAdapter["__interfaces"] = ["fisica.FContactListener"];
})(fisica || (fisica = {}));
(function (fisica) {
    class FContactID {
        constructor(id, b1, b2) {
            if (((id != null && id instanceof org.jbox2d.collision.ContactID) || id === null) && ((b1 != null && b1 instanceof fisica.FBody) || b1 === null) && ((b2 != null && b2 instanceof fisica.FBody) || b2 === null)) {
                let __args = arguments;
                if (this.m_id === undefined)
                    this.m_id = null;
                if (this.m_b1 === undefined)
                    this.m_b1 = null;
                if (this.m_b2 === undefined)
                    this.m_b2 = null;
                if (this.m_id === undefined)
                    this.m_id = null;
                if (this.m_b1 === undefined)
                    this.m_b1 = null;
                if (this.m_b2 === undefined)
                    this.m_b2 = null;
                (() => {
                    this.m_id = id;
                    this.m_b1 = b1;
                    this.m_b2 = b2;
                })();
            }
            else if (((id != null && id instanceof fisica.FContactID) || id === null) && b1 === undefined && b2 === undefined) {
                let __args = arguments;
                let fid = __args[0];
                if (this.m_id === undefined)
                    this.m_id = null;
                if (this.m_b1 === undefined)
                    this.m_b1 = null;
                if (this.m_b2 === undefined)
                    this.m_b2 = null;
                if (this.m_id === undefined)
                    this.m_id = null;
                if (this.m_b1 === undefined)
                    this.m_b1 = null;
                if (this.m_b2 === undefined)
                    this.m_b2 = null;
                (() => {
                    this.m_id = new org.jbox2d.collision.ContactID(fid.m_id);
                    this.m_b1 = fid.m_b1;
                    this.m_b2 = fid.m_b2;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        hashCode() {
            let result = 0;
            let h1 = ((o) => { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString().split('').reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
            } })(this.m_b1);
            let h2 = ((o) => { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString().split('').reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
            } })(this.m_b2);
            if (h1 < h2) {
                result = FContactID.HASH_PRIME * result + h1;
                result = FContactID.HASH_PRIME * result + h2;
            }
            else {
                result = FContactID.HASH_PRIME * result + h2;
                result = FContactID.HASH_PRIME * result + h1;
            }
            result = FContactID.HASH_PRIME * result + this.m_id.features.flip;
            result = FContactID.HASH_PRIME * result + this.m_id.features.incidentVertex;
            result = FContactID.HASH_PRIME * result + this.m_id.features.referenceEdge;
            result = FContactID.HASH_PRIME * result + this.m_id.features.incidentEdge;
            return result;
        }
        toString() {
            return this.m_id.features.toString();
        }
        equals(obj) {
            if (this === obj)
                return true;
            if ((obj == null) || (obj.constructor !== this.constructor))
                return false;
            let test = obj;
            return this.m_id.isEqual(test.m_id);
        }
    }
    FContactID.HASH_PRIME = 1000003;
    fisica.FContactID = FContactID;
    FContactID["__class"] = "fisica.FContactID";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Represents the result of the contact between two bodies.  Objects of this type are not created by the users.  Contact results are passed to the user when they implement the {@code contactResult(FContactResult){ }} method in the applet:
     *
     *
     * <pre>
     * {@code
     * FWorld world;
     *
     * void setup() {
     * Fisica.init(this);
     *
     * world = new FWorld();
     * world.setEdges();
     *
     * // Create and add bodies to the world here
     * // ...
     * }
     *
     * void draw() {
     * world.step();
     * world.draw();
     * }
     *
     * void contactResult(FContactResult result) {
     * // Draw an ellipse where the contact took place and as big as the normal impulse of the contact
     * ellipse(result.getX(), result.getY(), result.getNormalImpulse(), result.getNormalImpulse());
     *
     * // Trigger your sound here
     * // ...
     * }
     * }
     * </pre>
     *
     * To know if the contact is the beggining, the continuation or the end of a contact it is better to use the other methods {@code contactStarted(FContact){ }}, {@code contactPersisted(FContact){ }} and {@code contactEnded(FContact){ }}.
     *
     * @usage Contacts
     * @see FContact
     * @class
     */
    class FContactResult {
        constructor(contactResult) {
            if (this.m_position === undefined)
                this.m_position = null;
            if (this.m_normal === undefined)
                this.m_normal = null;
            if (this.m_body1 === undefined)
                this.m_body1 = null;
            if (this.m_body2 === undefined)
                this.m_body2 = null;
            if (this.m_normalImpulse === undefined)
                this.m_normalImpulse = 0;
            if (this.m_tangentImpulse === undefined)
                this.m_tangentImpulse = 0;
            if (this.m_id === undefined)
                this.m_id = null;
            this.m_position = new org.jbox2d.common.Vec2(contactResult.position);
            this.m_normal = new org.jbox2d.common.Vec2(contactResult.normal);
            this.m_body1 = contactResult.shape1.getBody().getUserData();
            this.m_body2 = contactResult.shape2.getBody().getUserData();
            this.m_normalImpulse = contactResult.normalImpulse;
            this.m_tangentImpulse = contactResult.tangentImpulse;
            this.m_id = new fisica.FContactID(new org.jbox2d.collision.ContactID(contactResult.id), this.m_body1, this.m_body2);
        }
        /**
         * Returns the first body involved in the contact.
         * @return {fisica.FBody} first of the bodies involved in the contact
         */
        getBody1() {
            return this.m_body1;
        }
        /**
         * Returns the second body involved in the contact.
         * @return {fisica.FBody} second of the bodies involved in the contact
         */
        getBody2() {
            return this.m_body2;
        }
        /**
         * Returns the horizontal position of the contact point.
         *
         * @return {number} the horizontal position of the contact point in pixels
         * @see #getY
         */
        getX() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).x;
        }
        /**
         * Returns the vertical position of the contact point.
         *
         * @return {number} the vertical position of the contact point in pixels
         * @see #getX
         */
        getY() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).y;
        }
        /**
         * Returns the horizontal component of the contact normal.
         *
         * @return {number} the horizontal component of the contact normal
         * @see #getNormalY
         */
        getNormalX() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).x;
        }
        /**
         * Returns the vertical component of the contact normal.
         *
         * @return {number} the vertical component of the contact normal
         * @see #getNormalX
         */
        getNormalY() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).y;
        }
        /**
         * Returns the normal component of the impulse of the contact.  This gives an idea of the strength of the collision that took place.  This represents the impulse necessary to avoid penetration of the bodies involved in the collision.  The impluse is simply the force multiplied by the timestep.  The result is returned in impulse units (kg * pixels / s).
         *
         * @return {number} the normal component of the contact's impulse
         * @see #getTangentImpulse
         */
        getNormalImpulse() {
            return fisica.Fisica.worldToScreen$float(this.m_normalImpulse);
        }
        /**
         * Returns the tangential component of the impulse of the contact.  This gives an idea of the strength of the friction between the bodies that took place.  The impluse is simply the force multiplied by the timestep.  The result is returned in impulse units (kg * pixels / s).
         *
         * @return {number} the tangent component of the contact's impulse
         * @see #getNormalImpulse
         */
        getTangentImpulse() {
            return fisica.Fisica.worldToScreen$float(this.m_tangentImpulse);
        }
        /**
         * Get the identifier of the contact.  This value is useful in order to uniquely identify a contact.  A new contact ID is created whenever to bodies enter into contact at a given point.  If the bodies slide against each other the contact ID is maintained even if the point of contact is modified due to the slide.  As soon as the two bodies separate the contact is considered ended.
         *
         * @return {fisica.FContactID} a unique identifier representing the contact
         */
        getId() {
            return this.m_id;
        }
    }
    fisica.FContactResult = FContactResult;
    FContactResult["__class"] = "fisica.FContactResult";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * This is a class from which all drawable objects of a world inherit.
     *
     * It contains most helping methods that handles stroke and fill colors and styles, as well as image attachments, etc.
     * @class
     */
    class FDrawable {
        constructor() {
            this.m_drawable = true;
            this.m_fill = true;
            this.m_fillColor = -1;
            this.m_stroke = true;
            this.m_strokeColor = -16777216;
            this.m_strokeWeight = 1.0;
            this.m_image = null;
            this.m_imageAlpha = 255.0;
            this.m_mask = null;
        }
        updateStyle(other) {
            this.m_drawable = other.m_drawable;
            this.m_fill = other.m_fill;
            this.m_fillColor = other.m_fillColor;
            this.m_stroke = other.m_stroke;
            this.m_strokeColor = other.m_strokeColor;
            this.m_strokeWeight = other.m_strokeWeight;
            this.m_image = other.m_image;
            this.m_imageAlpha = other.m_imageAlpha;
            this.m_mask = other.m_mask;
        }
        appletStroke(applet, argb) {
            let a = (argb >> 24) & 255;
            let r = (argb >> 16) & 255;
            let g = (argb >> 8) & 255;
            let b = argb & 255;
            applet.stroke(r, g, b, a);
        }
        appletFill(applet, argb) {
            let a = (argb >> 24) & 255;
            let r = (argb >> 16) & 255;
            let g = (argb >> 8) & 255;
            let b = argb & 255;
            applet.fill(r, g, b, a);
        }
        appletFillStroke(applet) {
            if (this.m_fill) {
                this.appletFill(applet, this.m_fillColor);
            }
            else {
                applet.noFill();
            }
            if (this.m_stroke) {
                this.appletStroke(applet, this.m_strokeColor);
            }
            else {
                applet.noStroke();
            }
            applet.strokeWeight(this.m_strokeWeight);
        }
        drawImage(applet) {
            applet.tint(255, 255, 255, this.m_imageAlpha);
            applet.image(this.m_image, 0 - (this.m_image.width / 2 | 0), 0 - (this.m_image.height / 2 | 0));
            applet.tint(255, 255, 255, 255);
        }
        /**
         * This method is called when calling {@code world.draw()}.
         * This method may be overriden to allow custom drawing of the object.
         *
         * @param {PGraphics} graphics  the graphics onto which the object must be drawn.
         */
        draw(graphics) {
        }
        /**
         * This method is called when calling {@code world.drawDebug()}.
         * This method may be overriden to allow custom debug drawing of the object.
         *
         * @param {PGraphics} graphics  the graphics onto which the object must be drawn.
         */
        drawDebug(graphics) {
        }
        /**
         * Attach an image to the object.
         * This method allows to draw an image onto the screen instead of calling the {@link #draw(PApplet)} method.
         *
         * @param {PImage} img  the PImage to attach to the object.
         */
        attachImage(img) {
            this.m_image = img;
        }
        /**
         * Dettach any image that has been attached to the object.
         *
         * @see #attachImage(PImage)
         */
        dettachImage() {
            this.m_image = null;
        }
        /**
         * Get the opacity with which to draw the attached image.
         *
         * @return {number} the opacity, a value from 0.0 to 1.0 with which to draw the attached image
         * @see #attachImage(PImage)
         * @see #setImageAlpha(float)
         */
        getImageAlpha() {
            return this.m_imageAlpha;
        }
        /**
         * Set the opacity with which to draw the attached image.
         *
         * @param {number} alpha   the opacity, a value from 0.0 to 1.0 with which to draw the attached image
         * @see #attachImage(PImage)
         * @see #getImageAlpha()
         */
        setImageAlpha(alpha) {
            this.m_imageAlpha = alpha;
        }
        /**
         * Set whether the object must be drawn or not.
         *
         * @param {boolean} drawable  if {@code true} the object will be drawn, else it will not
         * @see #isDrawable()
         */
        setDrawable(drawable) {
            this.m_drawable = drawable;
        }
        /**
         * Get whether the object must be drawn or not.
         *
         * @return {boolean} drawable  if {@code true} the object will be drawn, else it will not
         * @see #setDrawable(boolean)
         */
        isDrawable() {
            return this.m_drawable;
        }
        /**
         * Returns the fill color of the object.
         *
         * @return {number} a Processing color type. e.g.  {@code myBody.setFillColor(color(20,100,30,90));}
         * @see #setNoFill()
         * @see #setFill(float)
         * @see #setFill(float,float)
         * @see #setFill(float,float,float)
         * @see #setFill(float,float,float,float)
         */
        getFillColor() {
            return this.m_fillColor;
        }
        /**
         * Set the fill color of the object.  This method must be used in conjunction with Processing's color().  In most cases users will find it more convenient to use the versions of {@link #setFill(float)}, {@link #setFill(float,float)}, {@link #setFill(float,float,float)} or {@link #setFill(float,float,float,float)}
         *
         * @param {number} col  a Processing color type. e.g.  {@code myBody.setFillColor(color(20,100,30,90));}
         * @see #setNoFill()
         * @see #setFill(float)
         * @see #setFill(float,float)
         * @see #setFill(float,float,float)
         * @see #setFill(float,float,float,float)
         */
        setFillColor(col) {
            this.m_fill = true;
            this.m_fillColor = col;
        }
        /**
         * Set that the object must  be drawn without fill.
         *
         * @see #setFill(float)
         * @see #setFill(float,float)
         * @see #setFill(float,float,float)
         * @see #setFill(float,float,float,float)
         */
        setNoFill() {
            this.m_fill = false;
        }
        setFill$float(g) {
            this.setFillColor(fisica.Fisica.parent().color(g));
        }
        setFill$float$float(g, a) {
            this.setFillColor(fisica.Fisica.parent().color(g, a));
        }
        setFill$float$float$float(r, g, b) {
            this.setFillColor(fisica.Fisica.parent().color(r, g, b));
        }
        setFill$float$float$float$float(r, g, b, a) {
            this.setFillColor(fisica.Fisica.parent().color(r, g, b, a));
        }
        /**
         * Set the fill color of the object.
         *
         * @param {number} r   red value
         * @param {number} g   green value
         * @param {number} b   blue value
         * @param {number} a   alpha (opacity) value
         * @see #setFill(float)
         * @see #setFill(float,float)
         * @see #setFill(float,float,float)
         * @see #setFill(float,float,float,float)
         */
        setFill(r, g, b, a) {
            if (((typeof r === 'number') || r === null) && ((typeof g === 'number') || g === null) && ((typeof b === 'number') || b === null) && ((typeof a === 'number') || a === null)) {
                return this.setFill$float$float$float$float(r, g, b, a);
            }
            else if (((typeof r === 'number') || r === null) && ((typeof g === 'number') || g === null) && ((typeof b === 'number') || b === null) && a === undefined) {
                return this.setFill$float$float$float(r, g, b);
            }
            else if (((typeof r === 'number') || r === null) && ((typeof g === 'number') || g === null) && b === undefined && a === undefined) {
                return this.setFill$float$float(r, g);
            }
            else if (((typeof r === 'number') || r === null) && g === undefined && b === undefined && a === undefined) {
                return this.setFill$float(r);
            }
            else
                throw new Error('invalid overload');
        }
        /**
         * Set the stroke color of the object.  This method must be used in conjunction with Processing's color().  In most cases users will find it more convenient to use the versions of {@link #setStroke(float)}, {@link #setStroke(float,float)}, {@link #setStroke(float,float,float)} or {@link #setStroke(float,float,float,float)}
         *
         * @param {number} col  a Processing color type. e.g.  {@code myBody.setStrokeColor(color(20,100,30,90));}
         * @see #setNoStroke()
         * @see #setStroke(float)
         * @see #setStroke(float,float)
         * @see #setStroke(float,float,float)
         * @see #setStroke(float,float,float,float)
         */
        setStrokeColor(col) {
            this.m_stroke = true;
            this.m_strokeColor = col;
        }
        /**
         * Set that the object must  be drawn without stroke.
         *
         * @see #setStroke(float)
         * @see #setStroke(float,float)
         * @see #setStroke(float,float,float)
         * @see #setStroke(float,float,float,float)
         */
        setNoStroke() {
            this.m_stroke = false;
        }
        setStroke$float(g) {
            this.setStrokeColor(fisica.Fisica.parent().color(g));
        }
        setStroke$float$float(g, a) {
            this.setStrokeColor(fisica.Fisica.parent().color(g, a));
        }
        setStroke$float$float$float(r, g, b) {
            this.setStrokeColor(fisica.Fisica.parent().color(r, g, b));
        }
        setStroke$float$float$float$float(r, g, b, a) {
            this.setStrokeColor(fisica.Fisica.parent().color(r, g, b, a));
        }
        /**
         * Set the stroke color of the object.
         *
         * @param {number} r   red value
         * @param {number} g   green value
         * @param {number} b   blue value
         * @param {number} a   alpha (opacity) value
         * @see #setStroke(float)
         * @see #setStroke(float,float)
         * @see #setStroke(float,float,float)
         * @see #setStroke(float,float,float,float)
         */
        setStroke(r, g, b, a) {
            if (((typeof r === 'number') || r === null) && ((typeof g === 'number') || g === null) && ((typeof b === 'number') || b === null) && ((typeof a === 'number') || a === null)) {
                return this.setStroke$float$float$float$float(r, g, b, a);
            }
            else if (((typeof r === 'number') || r === null) && ((typeof g === 'number') || g === null) && ((typeof b === 'number') || b === null) && a === undefined) {
                return this.setStroke$float$float$float(r, g, b);
            }
            else if (((typeof r === 'number') || r === null) && ((typeof g === 'number') || g === null) && b === undefined && a === undefined) {
                return this.setStroke$float$float(r, g);
            }
            else if (((typeof r === 'number') || r === null) && g === undefined && b === undefined && a === undefined) {
                return this.setStroke$float(r);
            }
            else
                throw new Error('invalid overload');
        }
        /**
         * Set the stroke weight of the object.
         *
         * @param {number} weight   weight value in pixels
         * @see #setStroke(float)
         * @see #setStroke(float,float)
         * @see #setStroke(float,float,float)
         * @see #setStroke(float,float,float,float)
         */
        setStrokeWeight(weight) {
            this.m_strokeWeight = weight;
        }
    }
    fisica.FDrawable = FDrawable;
    FDrawable["__class"] = "fisica.FDrawable";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Represents the library Fisica.  It is mainly used to initialize it with the PApplet:
     * <pre>
     * {@code
     * Fisica.init(this);
     * }
     * </pre>
     * It also allows to modify global properties of the simulation such as the scale of meters to pixels:
     * <pre>
     * {@code
     * Fisica.setScale(40);
     * }
     * </pre>
     * In the future it may contain helping methods to create the objects.
     * @class
     */
    class Fisica {
        constructor() {
        }
        static screenToWorld$org_jbox2d_common_Vec2(m_in) {
            return Fisica.m_viewport.getScreenToWorld$org_jbox2d_common_Vec2(m_in);
        }
        static screenToWorld$float$float(x, y) {
            return Fisica.m_viewport.getScreenToWorld$float$float(x, y);
        }
        static screenToWorld(x, y) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return fisica.Fisica.screenToWorld$float$float(x, y);
            }
            else if (((x != null && x instanceof org.jbox2d.common.Vec2) || x === null) && y === undefined) {
                return fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(x);
            }
            else if (((typeof x === 'number') || x === null) && y === undefined) {
                return fisica.Fisica.screenToWorld$float(x);
            }
            else
                throw new Error('invalid overload');
        }
        static screenToWorld$float(a) {
            return Fisica.m_viewport.getScreenToWorld$float(a);
        }
        static worldToScreen$org_jbox2d_common_Vec2(m_in) {
            return Fisica.m_viewport.getWorldToScreen$org_jbox2d_common_Vec2(m_in);
        }
        static worldToScreen$float$float(x, y) {
            return Fisica.m_viewport.getWorldToScreen$float$float(x, y);
        }
        static worldToScreen(x, y) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return fisica.Fisica.worldToScreen$float$float(x, y);
            }
            else if (((x != null && x instanceof org.jbox2d.common.Vec2) || x === null) && y === undefined) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(x);
            }
            else if (((typeof x === 'number') || x === null) && y === undefined) {
                return fisica.Fisica.worldToScreen$float(x);
            }
            else
                throw new Error('invalid overload');
        }
        static worldToScreen$float(a) {
            return Fisica.m_viewport.getWorldToScreen$float(a);
        }
        static initialized() {
            return Fisica.m_initialized;
        }
        static parent() {
            if (Fisica.m_parent == null) {
                throw new Fisica.LibraryNotInitializedException();
            }
            return Fisica.m_parent;
        }
        static parentGraphics() {
            if (Fisica.m_parentGraphics == null) {
                throw new Fisica.LibraryNotInitializedException();
            }
            return Fisica.m_parentGraphics;
        }
        /**
         * Initialize the library.  Must be called before any use of the library.  Must be called by passing the PApplet.  e.g. {@code Fisica.init(this)}
         *
         * @param {*} applet  The applet on which to use the library.  This library can only be used with one applet
         */
        static init(applet) {
            Fisica.m_parent = applet;
            Fisica.m_parentGraphics = (applet);
            Fisica.m_parentGraphics.beginDraw();
            Fisica.m_initialized = true;
            Fisica.m_viewport = new Fisica.FViewport();
            Fisica.m_viewport.setScaleTransform(20);
        }
        /**
         * Set the scale from screen units to world units.  By setting the scale to 20 we are stating that 20 pixels is equivalent to 1 meter in the simulated world.
         *
         * @param {number} scale the number of pixels that are equivalent to 1 meter in the simulated world.
         */
        static setScale(scale) {
            Fisica.m_viewport.m_scale = scale;
        }
    }
    Fisica.m_initialized = false;
    Fisica.m_parent = null;
    Fisica.m_viewport = null;
    Fisica.m_parentGraphics = null;
    fisica.Fisica = Fisica;
    Fisica["__class"] = "fisica.Fisica";
    Fisica["__interfaces"] = ["def.processing.core.PConstants"];
    (function (Fisica) {
        class FViewport {
            constructor() {
                if (this.m_scale === undefined)
                    this.m_scale = 0;
                this.m_scale = 1.0;
            }
            setScaleTransform(a) {
                this.m_scale = a;
            }
            getScreenToWorld$float(a) {
                return Math.fround(a / this.m_scale);
            }
            getScreenToWorld$float$float(x, y) {
                return new org.jbox2d.common.Vec2(Math.fround(x / this.m_scale), Math.fround(y / this.m_scale));
            }
            getScreenToWorld(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.getScreenToWorld$float$float(x, y);
                }
                else if (((x != null && x instanceof org.jbox2d.common.Vec2) || x === null) && y === undefined) {
                    return this.getScreenToWorld$org_jbox2d_common_Vec2(x);
                }
                else if (((typeof x === 'number') || x === null) && y === undefined) {
                    return this.getScreenToWorld$float(x);
                }
                else
                    throw new Error('invalid overload');
            }
            getScreenToWorld$org_jbox2d_common_Vec2(p) {
                return new org.jbox2d.common.Vec2(Math.fround(p.x / this.m_scale), Math.fround(p.y / this.m_scale));
            }
            getWorldToScreen$float(a) {
                return Math.fround(a * this.m_scale);
            }
            getWorldToScreen$float$float(x, y) {
                return new org.jbox2d.common.Vec2(Math.fround(x * this.m_scale), Math.fround(y * this.m_scale));
            }
            getWorldToScreen(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    return this.getWorldToScreen$float$float(x, y);
                }
                else if (((x != null && x instanceof org.jbox2d.common.Vec2) || x === null) && y === undefined) {
                    return this.getWorldToScreen$org_jbox2d_common_Vec2(x);
                }
                else if (((typeof x === 'number') || x === null) && y === undefined) {
                    return this.getWorldToScreen$float(x);
                }
                else
                    throw new Error('invalid overload');
            }
            getWorldToScreen$org_jbox2d_common_Vec2(p) {
                return new org.jbox2d.common.Vec2(Math.fround(p.x * this.m_scale), Math.fround(p.y * this.m_scale));
            }
        }
        Fisica.FViewport = FViewport;
        FViewport["__class"] = "fisica.Fisica.FViewport";
        /**
         * Exception thrown when the library has not been initialized.  The method {@link Fisica#init(PApplet)} must be called before any use of the library.
         *
         * @param applet  The applet on which to use the library.  This library can only be used with one applet
         * @extends Error
         * @class
         */
        class LibraryNotInitializedException {
            constructor() {
                Object.setPrototypeOf(this, LibraryNotInitializedException.prototype);
            }
        }
        LibraryNotInitializedException.__fisica_Fisica_LibraryNotInitializedException_serialVersionUID = -3710605630786298674;
        Fisica.LibraryNotInitializedException = LibraryNotInitializedException;
        LibraryNotInitializedException["__class"] = "fisica.Fisica.LibraryNotInitializedException";
        LibraryNotInitializedException["__interfaces"] = ["java.io.Serializable"];
    })(Fisica = fisica.Fisica || (fisica.Fisica = {}));
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Represents the result of a casted ray.
     *
     *
     * <pre>
     * {@code
     * FWorld world;
     *
     * void setup() {
     * Fisica.init(this);
     *
     * world = new FWorld();
     * world.setEdges();
     *
     * // Create and add bodies to the world here
     * // ...
     * }
     *
     * void draw() {
     * world.step();
     * world.draw();
     *
     * FRaycastResult result = null;
     * FBody b = world.raycastOne(width/2, height/2, mouseX, mouseY, result, true);
     * }
     *
     * }
     * </pre>
     *
     *
     * @usage Contacts
     * @see FContact
     * @class
     */
    class FRaycastResult {
        constructor() {
            this.m_lambda = 0.0;
            this.m_normal = new org.jbox2d.common.Vec2();
            if (this.m_x1 === undefined)
                this.m_x1 = 0;
            if (this.m_x2 === undefined)
                this.m_x2 = 0;
            if (this.m_y1 === undefined)
                this.m_y1 = 0;
            if (this.m_y2 === undefined)
                this.m_y2 = 0;
        }
        set(x1, y1, x2, y2, raycastResult) {
            if (raycastResult != null) {
                this.m_lambda = raycastResult.lambda;
                this.m_normal.set(raycastResult.normal);
            }
            this.m_x1 = x1;
            this.m_x2 = x2;
            this.m_y1 = y1;
            this.m_y2 = y2;
            return this;
        }
        /**
         * Returns the lambda of the raycast result.
         *
         * @return {number} the lambda of the raycast result
         */
        getLambda() {
            return this.m_lambda;
        }
        /**
         * Returns the horizontal component of the ray cast contact normal.
         *
         * @return {number} the horizontal component of the ray cast contact normal
         * @see #getNormalY
         */
        getNormalX() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).x;
        }
        /**
         * Returns the vertical component of the ray cast contact normal.
         *
         * @return {number} the vertical component of the ray cast contact normal
         * @see #getNormalX
         */
        getNormalY() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).y;
        }
        /**
         * Returns the horizontal component of the ray cast contact normal.
         *
         * @return {number} the horizontal component of the ray cast contact normal
         * @see #getY
         * @see #getNormalX
         * @see #getNormalY
         */
        getX() {
            return PApplet.lerp(this.m_x1, this.m_x2, this.m_lambda);
        }
        /**
         * Returns the vertical component of the contact ray cast normal.
         *
         * @return {number} the vertical component of the contact ray cast normal
         * @see #getX
         * @see #getNormalX
         * @see #getNormalY
         */
        getY() {
            return PApplet.lerp(this.m_y1, this.m_y2, this.m_lambda);
        }
    }
    fisica.FRaycastResult = FRaycastResult;
    FRaycastResult["__class"] = "fisica.FRaycastResult";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs the world where all the bodies live in. We usually want to build
     * the world larger than the actual screen, because when bodies exit the world
     * they will appear stuck since they do not get update anymore. By default the
     * world's width and height are three times larger than those of the Processing
     * canvas.
     *
     * {@code
     * FWorld world;
     *
     * void setup() {
     * size(200, 200);
     *
     * Fisica.init(this); world = new FWorld(-width, -height, 2*width, 2*height); }
     * }
     *
     * @usage World
     * @param {number} topLeftX
     * the horizontal coordinate of the top left corner of the world
     * @param {number} topLeftY
     * the vertical coordinate of the top left corner of the world
     * @param {number} bottomRightX
     * the horizontal coordinate of the bottom right corner of the world
     * @param {number} bottomRightY
     * the vertical coordinate of the bottom right corner of the world
     * @see FBody
     * @class
     * @extends org.jbox2d.dynamics.World
     */
    class FWorld extends org.jbox2d.dynamics.World {
        constructor(topLeftX, topLeftY, bottomRightX, bottomRightY) {
            if (((typeof topLeftX === 'number') || topLeftX === null) && ((typeof topLeftY === 'number') || topLeftY === null) && ((typeof bottomRightX === 'number') || bottomRightX === null) && ((typeof bottomRightY === 'number') || bottomRightY === null)) {
                let __args = arguments;
                super(new org.jbox2d.collision.AABB(fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(topLeftX, topLeftY)), fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(bottomRightX, bottomRightY))), fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(0.0, 10.0)), true);
                if (this.left === undefined)
                    this.left = null;
                if (this.right === undefined)
                    this.right = null;
                if (this.top === undefined)
                    this.top = null;
                if (this.bottom === undefined)
                    this.bottom = null;
                if (this.m_topLeftX === undefined)
                    this.m_topLeftX = 0;
                if (this.m_topLeftY === undefined)
                    this.m_topLeftY = 0;
                if (this.m_bottomRightX === undefined)
                    this.m_bottomRightX = 0;
                if (this.m_bottomRightY === undefined)
                    this.m_bottomRightY = 0;
                if (this.m_contacts === undefined)
                    this.m_contacts = null;
                if (this.m_contactResults === undefined)
                    this.m_contactResults = null;
                if (this.m_actions === undefined)
                    this.m_actions = null;
                if (this.m_contactListener === undefined)
                    this.m_contactListener = null;
                if (this.m_clientContactListener === undefined)
                    this.m_clientContactListener = null;
                if (this.m_contactStartedMethod === undefined)
                    this.m_contactStartedMethod = null;
                if (this.m_contactPersistedMethod === undefined)
                    this.m_contactPersistedMethod = null;
                if (this.m_contactEndedMethod === undefined)
                    this.m_contactEndedMethod = null;
                if (this.m_contactResultMethod === undefined)
                    this.m_contactResultMethod = null;
                this.m_edgesFriction = 0.1;
                this.m_edgesRestitution = 0.1;
                this.m_grabbable = true;
                this.m_grabPositionX = 0.0;
                this.m_grabPositionY = 0.0;
                this.m_mouseButton = PConstants.LEFT;
                this.m_fbodies = ([]);
                this.m_mouseJoint = new fisica.FMouseJoint(null, 0.0, 0.0);
                this.m_small = new org.jbox2d.common.Vec2(0.001, 0.001);
                this.m_aabb = new org.jbox2d.collision.AABB();
                if (this.left === undefined)
                    this.left = null;
                if (this.right === undefined)
                    this.right = null;
                if (this.top === undefined)
                    this.top = null;
                if (this.bottom === undefined)
                    this.bottom = null;
                if (this.m_topLeftX === undefined)
                    this.m_topLeftX = 0;
                if (this.m_topLeftY === undefined)
                    this.m_topLeftY = 0;
                if (this.m_bottomRightX === undefined)
                    this.m_bottomRightX = 0;
                if (this.m_bottomRightY === undefined)
                    this.m_bottomRightY = 0;
                if (this.m_contacts === undefined)
                    this.m_contacts = null;
                if (this.m_contactResults === undefined)
                    this.m_contactResults = null;
                if (this.m_actions === undefined)
                    this.m_actions = null;
                if (this.m_contactListener === undefined)
                    this.m_contactListener = null;
                if (this.m_clientContactListener === undefined)
                    this.m_clientContactListener = null;
                if (this.m_contactStartedMethod === undefined)
                    this.m_contactStartedMethod = null;
                if (this.m_contactPersistedMethod === undefined)
                    this.m_contactPersistedMethod = null;
                if (this.m_contactEndedMethod === undefined)
                    this.m_contactEndedMethod = null;
                if (this.m_contactResultMethod === undefined)
                    this.m_contactResultMethod = null;
                (() => {
                    this.m_topLeftX = topLeftX;
                    this.m_topLeftY = topLeftY;
                    this.m_bottomRightX = bottomRightX;
                    this.m_bottomRightY = bottomRightY;
                    super.setWarmStarting(true);
                    super.setPositionCorrection(true);
                    super.setContinuousPhysics(true);
                    fisica.Fisica.parent().registerMethod("mouseEvent", this);
                    this.m_contactStartedMethod = ((fisica.Fisica.parent())["contactStarted"]);
                    this.m_contactPersistedMethod = ((fisica.Fisica.parent())["contactPersisted"]);
                    this.m_contactEndedMethod = ((fisica.Fisica.parent())["contactEnded"]);
                    this.m_contactResultMethod = ((fisica.Fisica.parent())["contactResult"]);
                    this.m_contactListener = new FWorld.ConcreteContactListener(this);
                    this.m_contactListener.m_world = this;
                    this.setContactListener$org_jbox2d_dynamics_ContactListener(this.m_contactListener);
                    this.m_contacts = ({});
                    this.m_contactResults = ([]);
                    this.m_actions = ([]);
                    this.m_mouseJoint.setDrawable(false);
                    this.setGravity$float$float(0, 200);
                })();
            }
            else if (topLeftX === undefined && topLeftY === undefined && bottomRightX === undefined && bottomRightY === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let topLeftX = -fisica.Fisica.parent().width;
                    let topLeftY = -fisica.Fisica.parent().height;
                    let bottomRightX = 2 * fisica.Fisica.parent().width;
                    let bottomRightY = 2 * fisica.Fisica.parent().height;
                    super(new org.jbox2d.collision.AABB(fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(topLeftX, topLeftY)), fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(bottomRightX, bottomRightY))), fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(0.0, 10.0)), true);
                    if (this.left === undefined)
                        this.left = null;
                    if (this.right === undefined)
                        this.right = null;
                    if (this.top === undefined)
                        this.top = null;
                    if (this.bottom === undefined)
                        this.bottom = null;
                    if (this.m_topLeftX === undefined)
                        this.m_topLeftX = 0;
                    if (this.m_topLeftY === undefined)
                        this.m_topLeftY = 0;
                    if (this.m_bottomRightX === undefined)
                        this.m_bottomRightX = 0;
                    if (this.m_bottomRightY === undefined)
                        this.m_bottomRightY = 0;
                    if (this.m_contacts === undefined)
                        this.m_contacts = null;
                    if (this.m_contactResults === undefined)
                        this.m_contactResults = null;
                    if (this.m_actions === undefined)
                        this.m_actions = null;
                    if (this.m_contactListener === undefined)
                        this.m_contactListener = null;
                    if (this.m_clientContactListener === undefined)
                        this.m_clientContactListener = null;
                    if (this.m_contactStartedMethod === undefined)
                        this.m_contactStartedMethod = null;
                    if (this.m_contactPersistedMethod === undefined)
                        this.m_contactPersistedMethod = null;
                    if (this.m_contactEndedMethod === undefined)
                        this.m_contactEndedMethod = null;
                    if (this.m_contactResultMethod === undefined)
                        this.m_contactResultMethod = null;
                    this.m_edgesFriction = 0.1;
                    this.m_edgesRestitution = 0.1;
                    this.m_grabbable = true;
                    this.m_grabPositionX = 0.0;
                    this.m_grabPositionY = 0.0;
                    this.m_mouseButton = PConstants.LEFT;
                    this.m_fbodies = ([]);
                    this.m_mouseJoint = new fisica.FMouseJoint(null, 0.0, 0.0);
                    this.m_small = new org.jbox2d.common.Vec2(0.001, 0.001);
                    this.m_aabb = new org.jbox2d.collision.AABB();
                    if (this.left === undefined)
                        this.left = null;
                    if (this.right === undefined)
                        this.right = null;
                    if (this.top === undefined)
                        this.top = null;
                    if (this.bottom === undefined)
                        this.bottom = null;
                    if (this.m_topLeftX === undefined)
                        this.m_topLeftX = 0;
                    if (this.m_topLeftY === undefined)
                        this.m_topLeftY = 0;
                    if (this.m_bottomRightX === undefined)
                        this.m_bottomRightX = 0;
                    if (this.m_bottomRightY === undefined)
                        this.m_bottomRightY = 0;
                    if (this.m_contacts === undefined)
                        this.m_contacts = null;
                    if (this.m_contactResults === undefined)
                        this.m_contactResults = null;
                    if (this.m_actions === undefined)
                        this.m_actions = null;
                    if (this.m_contactListener === undefined)
                        this.m_contactListener = null;
                    if (this.m_clientContactListener === undefined)
                        this.m_clientContactListener = null;
                    if (this.m_contactStartedMethod === undefined)
                        this.m_contactStartedMethod = null;
                    if (this.m_contactPersistedMethod === undefined)
                        this.m_contactPersistedMethod = null;
                    if (this.m_contactEndedMethod === undefined)
                        this.m_contactEndedMethod = null;
                    if (this.m_contactResultMethod === undefined)
                        this.m_contactResultMethod = null;
                    (() => {
                        this.m_topLeftX = topLeftX;
                        this.m_topLeftY = topLeftY;
                        this.m_bottomRightX = bottomRightX;
                        this.m_bottomRightY = bottomRightY;
                        super.setWarmStarting(true);
                        super.setPositionCorrection(true);
                        super.setContinuousPhysics(true);
                        fisica.Fisica.parent().registerMethod("mouseEvent", this);
                        this.m_contactStartedMethod = ((fisica.Fisica.parent())["contactStarted"]);
                        this.m_contactPersistedMethod = ((fisica.Fisica.parent())["contactPersisted"]);
                        this.m_contactEndedMethod = ((fisica.Fisica.parent())["contactEnded"]);
                        this.m_contactResultMethod = ((fisica.Fisica.parent())["contactResult"]);
                        this.m_contactListener = new FWorld.ConcreteContactListener(this);
                        this.m_contactListener.m_world = this;
                        this.setContactListener$org_jbox2d_dynamics_ContactListener(this.m_contactListener);
                        this.m_contacts = ({});
                        this.m_contactResults = ([]);
                        this.m_actions = ([]);
                        this.m_mouseJoint.setDrawable(false);
                        this.setGravity$float$float(0, 200);
                    })();
                }
            }
            else
                throw new Error('invalid overload');
        }
        addBody(body) {
            if (body == null) {
                return;
            }
            /* add */ (this.m_fbodies.push(body) > 0);
            body.addToWorld(this);
        }
        removeBody(body) {
            if (body == null) {
                return;
            }
            if (body === this.m_mouseJoint.getGrabbedBody()) {
                this.removeJoint(this.m_mouseJoint);
                this.m_mouseJoint.releaseGrabbedBody();
            }
            /* remove */ (a => { let index = a.indexOf(body); if (index >= 0) {
                a.splice(index, 1);
                return true;
            }
            else {
                return false;
            } })(this.m_fbodies);
            body.removeFromWorld();
        }
        addJoint(joint) {
            if (joint == null) {
                return;
            }
            joint.addToWorld(this);
        }
        removeJoint(joint) {
            if (joint == null) {
                return;
            }
            joint.removeFromWorld();
        }
        setContactListener$fisica_FContactListener(listener) {
            this.m_clientContactListener = listener;
        }
        setContactListener(listener) {
            if (((listener != null && (listener["__interfaces"] != null && listener["__interfaces"].indexOf("fisica.FContactListener") >= 0 || listener.constructor != null && listener.constructor["__interfaces"] != null && listener.constructor["__interfaces"].indexOf("fisica.FContactListener") >= 0)) || listener === null)) {
                return this.setContactListener$fisica_FContactListener(listener);
            }
            else if (((listener != null && (listener["__interfaces"] != null && listener["__interfaces"].indexOf("org.jbox2d.dynamics.ContactListener") >= 0 || listener.constructor != null && listener.constructor["__interfaces"] != null && listener.constructor["__interfaces"].indexOf("org.jbox2d.dynamics.ContactListener") >= 0)) || listener === null)) {
                return this.setContactListener$org_jbox2d_dynamics_ContactListener(listener);
            }
            else
                throw new Error('invalid overload');
        }
        setContactListener$org_jbox2d_dynamics_ContactListener(listener) {
            super.setContactListener(listener);
        }
        grabBody(x, y) {
            if (this.m_mouseJoint.getGrabbedBody() != null) {
                return;
            }
            let body = this.getBody$float$float$boolean(x, y, true);
            if (body == null)
                return;
            if (!(body.m_grabbable))
                return;
            this.m_mouseJoint.setGrabbedBodyAndTarget(body, x, y);
            this.m_mouseJoint.setFrequency(3.0);
            this.m_mouseJoint.setDamping(0.1);
            this.addJoint(this.m_mouseJoint);
            this.m_grabPositionX = Math.fround(x - body.getX());
            this.m_grabPositionY = Math.fround(y - body.getY());
        }
        dragBody(x, y) {
            if (this.m_mouseJoint.getGrabbedBody() == null) {
                return;
            }
            let body = this.m_mouseJoint.getGrabbedBody();
            if (body.isStatic()) {
                body.setPosition$float$float(Math.fround(x - this.m_grabPositionX), Math.fround(y - this.m_grabPositionY));
            }
            else {
                this.m_mouseJoint.setTarget(x, y);
            }
        }
        releaseBody() {
            if (this.m_mouseJoint.getGrabbedBody() == null) {
                return;
            }
            this.removeJoint(this.m_mouseJoint);
            this.m_mouseJoint.releaseGrabbedBody();
        }
        /**
         * This is an internal method to handle mouse interaction and should not be
         * used.
         *
         * @internal
         * @exclude
         * @param {ProcessingMouseEvent} event
         */
        mouseEvent(event) {
            if (event.getAction() === ProcessingMouseEvent.PRESS && event.getButton() === this.m_mouseButton) {
                this.grabBody(event.getX(), event.getY());
            }
            if (event.getAction() === ProcessingMouseEvent.RELEASE && event.getButton() === this.m_mouseButton) {
                this.releaseBody();
            }
            if (event.getAction() === ProcessingMouseEvent.DRAG) {
                this.dragBody(event.getX(), event.getY());
            }
        }
        /**
         * Returns the mouse joint that is used for interaction with the bodies in the
         * world.
         *
         * @return {fisica.FMouseJoint} the mouse joint used for grabbing bodies
         */
        getMouseJoint() {
            return this.m_mouseJoint;
        }
        /**
         * Controls whether the bodies in the world can be grabbed by the mouse or not.
         * By default the world bodies' are grabbable and draggable.
         *
         * {@code
         * world.setGrabbable(false);
         * }
         *
         * @usage World
         * @param {boolean} value
         * if true the bodies that live in this world can be grabbed and
         * dragged using the mouse
         * @see FBody
         */
        setGrabbable(value) {
            if (this.m_grabbable === value)
                return;
            this.m_grabbable = value;
            if (this.m_grabbable) {
                fisica.Fisica.parent().registerMethod("mouseEvent", this);
            }
            else {
                fisica.Fisica.parent().unregisterMethod("mouseEvent", this);
            }
        }
        processActions() {
            while ((this.m_actions.length > 0)) {
                {
                    (a => a.length == 0 ? null : a.shift())(this.m_actions).apply(this);
                }
            }
            ;
        }
        draw$def_processing_core_PGraphics(graphics) {
            this.processActions();
            for (let i = 0; i < this.m_fbodies.length; i++) {
                {
                    let fb = this.m_fbodies[i];
                    if (fb != null && fb.isDrawable())
                        fb.draw(graphics);
                }
                ;
            }
            for (let j = this.getJointList(); j != null; j = j.m_next) {
                {
                    let fj = (j.m_userData);
                    if (fj != null && fj.isDrawable())
                        fj.draw(graphics);
                }
                ;
            }
        }
        /**
         * Draws all the bodies in the world. This method is often called in the draw
         * method of the applet.
         *
         * @param {PGraphics} graphics
         * graphics to which to draw the world. Useful when trying to draw
         * the world on other buffers, such as when using createGraphics
         * @see FBody
         */
        draw(graphics) {
            if (((graphics != null && graphics instanceof PGraphics) || graphics === null)) {
                return this.draw$def_processing_core_PGraphics(graphics);
            }
            else if (graphics === undefined) {
                return this.draw$();
            }
            else
                throw new Error('invalid overload');
        }
        drawDebug$def_processing_core_PGraphics(graphics) {
            this.processActions();
            for (let i = 0; i < this.m_fbodies.length; i++) {
                {
                    let fb = this.m_fbodies[i];
                    if (fb != null)
                        fb.drawDebug(graphics);
                }
                ;
            }
            for (let j = this.getJointList(); j != null; j = j.m_next) {
                {
                    let fj = (j.m_userData);
                    if (fj != null)
                        fj.drawDebug(graphics);
                }
                ;
            }
        }
        /**
         * Draws the debug version of all the bodies in the world. This method is often
         * called in the draw method of the applet.
         *
         * @param {PGraphics} graphics
         * graphics to which to draw the world. Useful when trying to draw
         * the world on other buffers, such as when using createGraphics
         * @see FBody
         */
        drawDebug(graphics) {
            if (((graphics != null && graphics instanceof PGraphics) || graphics === null)) {
                return this.drawDebug$def_processing_core_PGraphics(graphics);
            }
            else if (graphics === undefined) {
                return this.drawDebug$();
            }
            else
                throw new Error('invalid overload');
        }
        draw$() {
            this.draw$def_processing_core_PGraphics(fisica.Fisica.parentGraphics());
        }
        drawDebug$() {
            this.drawDebug$def_processing_core_PGraphics(fisica.Fisica.parentGraphics());
        }
        add$fisica_FBody(body) {
            let action = new fisica.FAddBodyAction(body);
            /* add */ (this.m_actions.push(action) > 0);
        }
        /**
         * Add a body to the world.
         *
         * @param {fisica.FBody} body
         * body to be added to the world
         * @see #remove(FBody)
         */
        add(body) {
            if (((body != null && body instanceof fisica.FBody) || body === null)) {
                return this.add$fisica_FBody(body);
            }
            else if (((body != null && body instanceof fisica.FJoint) || body === null)) {
                return this.add$fisica_FJoint(body);
            }
            else
                throw new Error('invalid overload');
        }
        remove$fisica_FBody(body) {
            let action = new fisica.FRemoveBodyAction(body);
            /* add */ (this.m_actions.push(action) > 0);
        }
        /**
         * Remove a body from the world.
         *
         * @param {fisica.FBody} body
         * body to be removed from the world
         * @see #add(FBody)
         */
        remove(body) {
            if (((body != null && body instanceof fisica.FBody) || body === null)) {
                return this.remove$fisica_FBody(body);
            }
            else if (((body != null && body instanceof fisica.FJoint) || body === null)) {
                return this.remove$fisica_FJoint(body);
            }
            else
                throw new Error('invalid overload');
        }
        add$fisica_FJoint(joint) {
            let action = new fisica.FAddJointAction(joint);
            /* add */ (this.m_actions.push(action) > 0);
        }
        remove$fisica_FJoint(joint) {
            let action = new fisica.FRemoveJointAction(joint);
            /* add */ (this.m_actions.push(action) > 0);
        }
        /**
         * Clear all bodies and joints from the world. NOT IMPLEMENTED YET.
         */
        clear() {
            for (let j = this.getJointList(); j != null; j = j.m_next) {
                {
                    let fj = (j.m_userData);
                    this.remove$fisica_FJoint(fj);
                }
                ;
            }
            for (let b = this.getBodyList(); b != null; b = b.m_next) {
                {
                    let fb = (b.m_userData);
                    this.remove$fisica_FBody(fb);
                }
                ;
            }
        }
        setEdges$float$float$float$float$int(topLeftX, topLeftY, bottomRightX, bottomRightY, color) {
            let height = Math.abs(Math.fround(bottomRightY - topLeftY));
            let width = Math.abs(Math.fround(bottomRightX - topLeftX));
            let ymid = Math.fround((Math.fround(topLeftY + bottomRightY)) / 2.0);
            let xmid = Math.fround((Math.fround(topLeftX + bottomRightX)) / 2.0);
            this.left = new fisica.FBox(20, height);
            this.left.setStaticBody(true);
            this.left.setGrabbable(false);
            this.left.setFillColor(color);
            this.left.setStrokeColor(color);
            this.left.setPosition$float$float(Math.fround(topLeftX - 5), ymid);
            this.addBody(this.left);
            this.right = new fisica.FBox(20, height);
            this.right.setStaticBody(true);
            this.right.setGrabbable(false);
            this.right.setFillColor(color);
            this.right.setStrokeColor(color);
            this.right.setPosition$float$float(Math.fround(bottomRightX + 5), ymid);
            this.addBody(this.right);
            this.top = new fisica.FBox(width, 20);
            this.top.setStaticBody(true);
            this.top.setGrabbable(false);
            this.top.setFillColor(color);
            this.top.setStrokeColor(color);
            this.top.setPosition$float$float(xmid, Math.fround(topLeftY - 5));
            this.addBody(this.top);
            this.bottom = new fisica.FBox(width, 20);
            this.bottom.setStaticBody(true);
            this.bottom.setGrabbable(false);
            this.bottom.setFillColor(color);
            this.bottom.setStrokeColor(color);
            this.bottom.setPosition$float$float(xmid, Math.fround(bottomRightY + 5));
            this.addBody(this.bottom);
            this.setEdgesFriction(this.m_edgesFriction);
            this.setEdgesRestitution(this.m_edgesRestitution);
        }
        /**
         * Add edges of given dimensions to the world. This will create the bodies for
         * {@link #left}, {@link #right}, {@link #bottom} and {@link #top}.
         *
         * @param {number} topLeftX
         * the horizontal coordinate of the top left corner of the edges
         * @param {number} topLeftY
         * the vertical coordinate of the top left corner of the edges
         * @param {number} bottomRightX
         * the horizontal coordinate of the bottom right corner of the edges
         * @param {number} bottomRightY
         * the vertical coordinate of the bottom right corner of the edges
         * @param {number} color
         * the color of the edges. This color must be passed using
         * Processing's color() function
         */
        setEdges(topLeftX, topLeftY, bottomRightX, bottomRightY, color) {
            if (((typeof topLeftX === 'number') || topLeftX === null) && ((typeof topLeftY === 'number') || topLeftY === null) && ((typeof bottomRightX === 'number') || bottomRightX === null) && ((typeof bottomRightY === 'number') || bottomRightY === null) && ((typeof color === 'number') || color === null)) {
                return this.setEdges$float$float$float$float$int(topLeftX, topLeftY, bottomRightX, bottomRightY, color);
            }
            else if (((typeof topLeftX === 'number') || topLeftX === null) && ((typeof topLeftY === 'number') || topLeftY === null) && ((typeof bottomRightX === 'number') || bottomRightX === null) && ((typeof bottomRightY === 'number') || bottomRightY === null) && color === undefined) {
                return this.setEdges$float$float$float$float(topLeftX, topLeftY, bottomRightX, bottomRightY);
            }
            else if (((topLeftX != null && (topLeftX["__interfaces"] != null && topLeftX["__interfaces"].indexOf("def.processing.core.PApplet") >= 0 || topLeftX.constructor != null && topLeftX.constructor["__interfaces"] != null && topLeftX.constructor["__interfaces"].indexOf("def.processing.core.PApplet") >= 0)) || topLeftX === null) && ((typeof topLeftY === 'number') || topLeftY === null) && bottomRightX === undefined && bottomRightY === undefined && color === undefined) {
                return this.setEdges$def_processing_core_PApplet$int(topLeftX, topLeftY);
            }
            else if (((typeof topLeftX === 'number') || topLeftX === null) && topLeftY === undefined && bottomRightX === undefined && bottomRightY === undefined && color === undefined) {
                return this.setEdges$int(topLeftX);
            }
            else if (topLeftX === undefined && topLeftY === undefined && bottomRightX === undefined && bottomRightY === undefined && color === undefined) {
                return this.setEdges$();
            }
            else
                throw new Error('invalid overload');
        }
        setEdges$float$float$float$float(topLeftX, topLeftY, bottomRightX, bottomRightY) {
            this.setEdges$float$float$float$float$int(topLeftX, topLeftY, bottomRightX, bottomRightY, fisica.Fisica.parent().color(0));
        }
        setEdges$def_processing_core_PApplet$int(applet, color) {
            this.setEdges$float$float$float$float$int(0, 0, applet.width, applet.height, color);
        }
        setEdges$int(color) {
            this.setEdges$def_processing_core_PApplet$int(fisica.Fisica.parent(), color);
        }
        setEdges$() {
            this.setEdges$def_processing_core_PApplet$int(fisica.Fisica.parent(), fisica.Fisica.parent().color(0));
        }
        /**
         * Set the friction of all the edges.
         *
         * @param {number} friction
         * the friction of the edges
         */
        setEdgesFriction(friction) {
            if (this.left != null) {
                this.left.setFriction(friction);
            }
            if (this.right != null) {
                this.right.setFriction(friction);
            }
            if (this.top != null) {
                this.top.setFriction(friction);
            }
            if (this.bottom != null) {
                this.bottom.setFriction(friction);
            }
            this.m_edgesFriction = friction;
        }
        /**
         * Set the restitution of all the edges.
         *
         * @param {number} restitution
         * the restitution of the edges
         */
        setEdgesRestitution(restitution) {
            if (this.left != null) {
                this.left.setRestitution(restitution);
            }
            if (this.right != null) {
                this.right.setRestitution(restitution);
            }
            if (this.top != null) {
                this.top.setRestitution(restitution);
            }
            if (this.bottom != null) {
                this.bottom.setRestitution(restitution);
            }
            this.m_edgesRestitution = restitution;
        }
        setGravity$float$float(gx, gy) {
            this.setGravity$org_jbox2d_common_Vec2(fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(gx, gy)));
        }
        /**
         * Set the gravity of the world. Use {@code world.setGravity(0,0);} to have a
         * world without gravity.
         *
         * @param {number} gx
         * the horizontal component of the gravity
         * @param {number} gy
         * the vertical component of the gravity
         */
        setGravity(gx, gy) {
            if (((typeof gx === 'number') || gx === null) && ((typeof gy === 'number') || gy === null)) {
                return this.setGravity$float$float(gx, gy);
            }
            else if (((gx != null && gx instanceof org.jbox2d.common.Vec2) || gx === null) && gy === undefined) {
                return this.setGravity$org_jbox2d_common_Vec2(gx);
            }
            else
                throw new Error('invalid overload');
        }
        setGravity$org_jbox2d_common_Vec2(vector) {
            super.setGravity(vector);
        }
        step$() {
            this.step$float(Math.fround(1.0 / 60.0));
        }
        step$float(dt) {
            this.step$float$int(dt, 10);
        }
        step$float$int(dt, iterationCount) {
            this.processActions();
            /* clear */ (this.m_contactResults.length = 0);
            super.step(dt, iterationCount);
        }
        /**
         * Advance the world simulation of given time, with a given number of
         * iterations. The larger the number of iterations, the more computationally
         * expensive and precise it will be. The default is 10 iterations.
         *
         * @param {number} dt
         * the time to advance the world simulation
         * @param {number} iterationCount
         * the number of iterations for the world simulation step
         */
        step(dt, iterationCount) {
            if (((typeof dt === 'number') || dt === null) && ((typeof iterationCount === 'number') || iterationCount === null)) {
                return this.step$float$int(dt, iterationCount);
            }
            else if (((typeof dt === 'number') || dt === null) && iterationCount === undefined) {
                return this.step$float(dt);
            }
            else if (dt === undefined && iterationCount === undefined) {
                return this.step$();
            }
            else
                throw new Error('invalid overload');
        }
        getBody$float$float(x, y) {
            return this.getBody$float$float$boolean(x, y, true);
        }
        getBody$float$float$boolean(x, y, getStatic) {
            let bodies = this.getBodies$float$float$boolean(x, y, getStatic);
            if (bodies.length === 0)
                return null;
            return bodies[0];
        }
        /**
         * Returns the first object found at the given position.
         *
         * @param {number} x
         * the horizontal component of the position
         * @param {number} y
         * the vertical component of the position
         * @param {boolean} getStatic
         * if {@code true} it will also get static objects that can be found
         * at that position
         * @return {fisica.FBody} the body found at the given position
         */
        getBody(x, y, getStatic) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof getStatic === 'boolean') || getStatic === null)) {
                return this.getBody$float$float$boolean(x, y, getStatic);
            }
            else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && getStatic === undefined) {
                return this.getBody$float$float(x, y);
            }
            else
                throw new Error('invalid overload');
        }
        getBodies$() {
            let result = ([]);
            for (let b = this.getBodyList(); b != null; b = b.m_next) {
                {
                    let fb = (b.m_userData);
                    if (fb != null) {
                        /* add */ (result.push(fb) > 0);
                    }
                }
                ;
            }
            return result;
        }
        getBodies$float$float(x, y) {
            return this.getBodies$float$float$boolean(x, y, true);
        }
        getBodies$float$float$boolean(x, y, getStatic) {
            return this.getBodies$float$float$boolean$int(x, y, getStatic, 10);
        }
        getBodies$float$float$boolean$int(x, y, getStatic, count) {
            let p = fisica.Fisica.screenToWorld$float$float(x, y);
            this.m_aabb.lowerBound.set(p);
            this.m_aabb.lowerBound.subLocal(this.m_small);
            this.m_aabb.upperBound.set(p);
            this.m_aabb.upperBound.addLocal(this.m_small);
            let shapes = this.query(this.m_aabb, count);
            let result = ([]);
            if (shapes == null)
                return result;
            for (let j = 0; j < shapes.length; j++) {
                {
                    let shapeBody = shapes[j].getBody();
                    if (shapeBody.isStatic() === false || getStatic) {
                        let inside = shapes[j].testPoint(shapeBody.getMemberXForm(), p);
                        if (inside) {
                            /* add */ (result.push((shapeBody.getUserData())) > 0);
                        }
                    }
                }
                ;
            }
            return result;
        }
        /**
         * Returns a list with all the bodies found at the given position.
         *
         * @param {number} x
         * the horizontal component of the position
         * @param {number} y
         * the vertical component of the position
         * @param {boolean} getStatic
         * if {@code true} it will also get static objects that can be found
         * at that position
         * @param {number} count
         * the maximum number of bodies to be retrieved
         * @return {Array} an ArrayList (of FBody) of all bodies found at the given position
         */
        getBodies(x, y, getStatic, count) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof getStatic === 'boolean') || getStatic === null) && ((typeof count === 'number') || count === null)) {
                return this.getBodies$float$float$boolean$int(x, y, getStatic, count);
            }
            else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof getStatic === 'boolean') || getStatic === null) && count === undefined) {
                return this.getBodies$float$float$boolean(x, y, getStatic);
            }
            else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && getStatic === undefined && count === undefined) {
                return this.getBodies$float$float(x, y);
            }
            else if (x === undefined && y === undefined && getStatic === undefined && count === undefined) {
                return this.getBodies$();
            }
            else
                throw new Error('invalid overload');
        }
        raycast$float$float$float$float$fisica_FBody_A$int$boolean(x1, y1, x2, y2, bodies, maxCount, solidShapes) {
            let segment = new org.jbox2d.collision.Segment();
            segment.p1.set(fisica.Fisica.screenToWorld$float$float(x1, y1));
            segment.p2.set(fisica.Fisica.screenToWorld$float$float(x2, y2));
            let results = (s => { let a = []; while (s-- > 0)
                a.push(null); return a; })(maxCount);
            let shapes = (s => { let a = []; while (s-- > 0)
                a.push(null); return a; })(maxCount);
            let count = this.raycast$org_jbox2d_collision_Segment$org_jbox2d_collision_shapes_Shape_A$int$boolean$java_lang_Object(segment, shapes, maxCount, solidShapes, null);
            for (let i = 0; i < count; ++i) {
                {
                    let shape = shapes[i];
                    let shapeBody = shape.getBody();
                    results[i] = (shapeBody.getUserData());
                }
                ;
            }
            return count;
        }
        raycast(x1, y1, x2, y2, bodies, maxCount, solidShapes) {
            if (((typeof x1 === 'number') || x1 === null) && ((typeof y1 === 'number') || y1 === null) && ((typeof x2 === 'number') || x2 === null) && ((typeof y2 === 'number') || y2 === null) && ((bodies != null && bodies instanceof Array && (bodies.length == 0 || bodies[0] == null || (bodies[0] != null && bodies[0] instanceof fisica.FBody))) || bodies === null) && ((typeof maxCount === 'number') || maxCount === null) && ((typeof solidShapes === 'boolean') || solidShapes === null)) {
                return this.raycast$float$float$float$float$fisica_FBody_A$int$boolean(x1, y1, x2, y2, bodies, maxCount, solidShapes);
            }
            else if (((x1 != null && x1 instanceof org.jbox2d.collision.Segment) || x1 === null) && ((y1 != null && y1 instanceof Array && (y1.length == 0 || y1[0] == null || (y1[0] != null && y1[0] instanceof org.jbox2d.collision.shapes.Shape))) || y1 === null) && ((typeof x2 === 'number') || x2 === null) && ((typeof y2 === 'boolean') || y2 === null) && ((bodies != null) || bodies === null) && maxCount === undefined && solidShapes === undefined) {
                return this.raycast$org_jbox2d_collision_Segment$org_jbox2d_collision_shapes_Shape_A$int$boolean$java_lang_Object(x1, y1, x2, y2, bodies);
            }
            else
                throw new Error('invalid overload');
        }
        raycast$org_jbox2d_collision_Segment$org_jbox2d_collision_shapes_Shape_A$int$boolean$java_lang_Object(segment, shapes, maxCount, solidShapes, userData) {
            return super.raycast(segment, shapes, maxCount, solidShapes, userData);
        }
        raycastOne$org_jbox2d_collision_Segment$org_jbox2d_common_RaycastResult$boolean$java_lang_Object(segment, result, solidShapes, userData) {
            return super.raycastOne(segment, result, solidShapes, userData);
        }
        raycastOne$float$float$float$float$fisica_FRaycastResult$boolean(x1, y1, x2, y2, result, solidShapes) {
            let segment = new org.jbox2d.collision.Segment();
            segment.p1.set(fisica.Fisica.screenToWorld$float$float(x1, y1));
            segment.p2.set(fisica.Fisica.screenToWorld$float$float(x2, y2));
            let maxCount = 1;
            let shapes = (s => { let a = []; while (s-- > 0)
                a.push(null); return a; })(maxCount);
            let count = this.raycast$org_jbox2d_collision_Segment$org_jbox2d_collision_shapes_Shape_A$int$boolean$java_lang_Object(segment, shapes, maxCount, solidShapes, null);
            if (count === 0)
                return null;
            let temp = new org.jbox2d.common.RaycastResult();
            shapes[0].testSegment(shapes[0].getBody().getMemberXForm(), temp, segment, 1.0);
            result.set(x1, y1, x2, y2, temp);
            return (shapes[0].getBody().getUserData());
        }
        raycastOne(x1, y1, x2, y2, result, solidShapes) {
            if (((typeof x1 === 'number') || x1 === null) && ((typeof y1 === 'number') || y1 === null) && ((typeof x2 === 'number') || x2 === null) && ((typeof y2 === 'number') || y2 === null) && ((result != null && result instanceof fisica.FRaycastResult) || result === null) && ((typeof solidShapes === 'boolean') || solidShapes === null)) {
                return this.raycastOne$float$float$float$float$fisica_FRaycastResult$boolean(x1, y1, x2, y2, result, solidShapes);
            }
            else if (((x1 != null && x1 instanceof org.jbox2d.collision.Segment) || x1 === null) && ((y1 != null && y1 instanceof org.jbox2d.common.RaycastResult) || y1 === null) && ((typeof x2 === 'boolean') || x2 === null) && ((y2 != null) || y2 === null) && result === undefined && solidShapes === undefined) {
                return this.raycastOne$org_jbox2d_collision_Segment$org_jbox2d_common_RaycastResult$boolean$java_lang_Object(x1, y1, x2, y2);
            }
            else
                throw new Error('invalid overload');
        }
    }
    fisica.FWorld = FWorld;
    FWorld["__class"] = "fisica.FWorld";
    (function (FWorld) {
        /**
         * Forward the contact events to the contactStarted(ContactPoint point),
         * contactPersisted(ContactPoint point) and contactStopped(ContactPoint point)
         * which may be implemented in the sketch.
         * @class
         */
        class ConcreteContactListener {
            constructor(__parent) {
                this.__parent = __parent;
                if (this.m_world === undefined)
                    this.m_world = null;
            }
            add(point) {
                let contact = new fisica.FContact(point);
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(this.m_world.m_contacts, contact.getId(), contact);
                if (this.__parent.m_clientContactListener != null) {
                    try {
                        this.__parent.m_clientContactListener.contactStarted(contact);
                        return;
                    }
                    catch (e) {
                        console.error("Disabling contact listener because of an error.");
                        console.error(e.message, e);
                        this.__parent.m_clientContactListener = null;
                    }
                    ;
                }
                if (this.m_world.m_contactStartedMethod == null) {
                    return;
                }
                try {
                    (this.m_world.m_contactStartedMethod).apply(fisica.Fisica.parent(), [contact]);
                }
                catch (e) {
                    console.error("Disabling contactStarted(ContactPoint point) because of an error.");
                    console.error(e.message, e);
                    this.m_world.m_contactStartedMethod = (null);
                }
                ;
            }
            persist(point) {
                let contact = new fisica.FContact(point);
                /* put */ ((m, k, v) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(this.m_world.m_contacts, contact.getId(), contact);
                if (this.__parent.m_clientContactListener != null) {
                    try {
                        this.__parent.m_clientContactListener.contactPersisted(contact);
                        return;
                    }
                    catch (e) {
                        console.error("Disabling contact listener because of an error.");
                        console.error(e.message, e);
                        this.__parent.m_clientContactListener = null;
                    }
                    ;
                }
                if (this.m_world.m_contactPersistedMethod == null) {
                    return;
                }
                try {
                    (this.m_world.m_contactPersistedMethod).apply(fisica.Fisica.parent(), [contact]);
                }
                catch (e) {
                    console.error("Disabling contactPersisted(FContact point) because of an error.");
                    console.error(e.message, e);
                    this.m_world.m_contactPersistedMethod = (null);
                }
                ;
            }
            remove(point) {
                let contact = new fisica.FContact(point);
                /* remove */ ((m, k) => { if (m.entries == null)
                    m.entries = []; for (let i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries.splice(i, 1)[0];
                    } })(this.m_world.m_contacts, contact.getId());
                if (this.__parent.m_clientContactListener != null) {
                    try {
                        this.__parent.m_clientContactListener.contactEnded(contact);
                        return;
                    }
                    catch (e) {
                        console.error("Disabling contact listener because of an error.");
                        console.error(e.message, e);
                        this.__parent.m_clientContactListener = null;
                    }
                    ;
                }
                if (this.m_world.m_contactEndedMethod == null) {
                    return;
                }
                try {
                    (this.m_world.m_contactEndedMethod).apply(fisica.Fisica.parent(), [contact]);
                }
                catch (e) {
                    console.error("Disabling contactEnded(FContact point) because of an error.");
                    console.error(e.message, e);
                    this.m_world.m_contactEndedMethod = (null);
                }
                ;
            }
            result(point) {
                let result = new fisica.FContactResult(point);
                /* add */ (this.__parent.m_contactResults.push(result) > 0);
                if (this.__parent.m_clientContactListener != null) {
                    try {
                        this.__parent.m_clientContactListener.contactResult(result);
                        return;
                    }
                    catch (e) {
                        console.error("Disabling contact listener because of an error.");
                        console.error(e.message, e);
                        this.__parent.m_clientContactListener = null;
                    }
                    ;
                }
                if (this.m_world.m_contactResultMethod == null) {
                    return;
                }
                try {
                    (this.m_world.m_contactResultMethod).apply(fisica.Fisica.parent(), [result]);
                }
                catch (e) {
                    console.error("Disabling contactResult(FContactResult result) because of an error.");
                    console.error(e.message, e);
                    this.m_world.m_contactResultMethod = (null);
                }
                ;
            }
        }
        FWorld.ConcreteContactListener = ConcreteContactListener;
        ConcreteContactListener["__class"] = "fisica.FWorld.ConcreteContactListener";
        ConcreteContactListener["__interfaces"] = ["org.jbox2d.dynamics.ContactListener"];
    })(FWorld = fisica.FWorld || (fisica.FWorld = {}));
})(fisica || (fisica = {}));
(function (fisica) {
    class FWorldAction {
    }
    fisica.FWorldAction = FWorldAction;
    FWorldAction["__class"] = "fisica.FWorldAction";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Represents a body in the world.
     *
     * A body is an object which may collide and react to forces in the world.  The bodies have many properties such as density, velocity, position, etc... with which we can control their behavior.  This class cannot be be instantiated, instead use one of the derived classes.
     * @class
     * @extends fisica.FDrawable
     */
    class FBody extends fisica.FDrawable {
        constructor() {
            super();
            this.m_density = 1.0;
            this.m_restitution = 0.1;
            this.m_friction = 0.1;
            this.m_bullet = false;
            this.m_sensor = false;
            this.m_static = false;
            this.m_linearDamping = 0.5;
            this.m_angularDamping = 0.5;
            this.m_rotatable = true;
            this.m_allowSleep = true;
            this.m_isSleeping = false;
            this.m_groupIndex = 0;
            this.m_filterBits = 65535;
            this.m_categoryBits = 1;
            this.m_linearVelocity = new org.jbox2d.common.Vec2(0.0, 0.0);
            this.m_angularVelocity = 0.0;
            this.m_force = new org.jbox2d.common.Vec2(0.0, 0.0);
            this.m_torque = 0.0;
            this.m_position = new org.jbox2d.common.Vec2(0.0, 0.0);
            this.m_angle = 0.0;
            this.m_grabbable = true;
            this.m_shape = null;
            if (this.m_name === undefined)
                this.m_name = null;
            if (this.m_body === undefined)
                this.m_body = null;
            if (this.m_world === undefined)
                this.m_world = null;
            if (this.m_parent === undefined)
                this.m_parent = null;
        }
        processBody(bd, sd) {
            this.m_shape = bd.createShape(sd);
            this.m_shape.m_userData = this;
        }
        /**
         * WARNING: This method is internal only and may change someday.  If you are using this method please contact the developer since there should be a better way or we may add something to the library.
         *
         * @return {org.jbox2d.dynamics.Body} the internal JBox2D body
         */
        getBox2dBody() {
            return this.m_body;
        }
        /**
         * Get the group to which this body belongs.  Groups allow to select the bodies that may collide together or with others.  If the group index is negative then they will not collide with each other but they will collide with all the bodies of the other groups.
         *
         * @return {number} the index of the group
         */
        getGroupIndex() {
            return this.m_groupIndex;
        }
        addToWorld(world) {
            let bd = new org.jbox2d.dynamics.BodyDef();
            bd.isBullet = this.m_bullet;
            this.m_world = world;
            this.m_body = world.createBody(bd);
            this.m_body.m_userData = this;
            this.m_body.setXForm(this.m_position, this.m_angle);
            this.m_body.setLinearVelocity(this.m_linearVelocity);
            this.m_body.setAngularVelocity(this.m_angularVelocity);
            this.m_body.m_linearDamping = this.m_linearDamping;
            this.m_body.m_angularDamping = this.m_angularDamping;
            if (this.m_rotatable) {
                this.m_body.m_flags &= ~org.jbox2d.dynamics.Body.e_fixedRotationFlag;
            }
            else {
                this.m_body.m_flags |= org.jbox2d.dynamics.Body.e_fixedRotationFlag;
            }
            if (this.m_allowSleep) {
                this.m_body.m_flags |= org.jbox2d.dynamics.Body.e_allowSleepFlag;
            }
            else {
                this.m_body.m_flags &= ~org.jbox2d.dynamics.Body.e_allowSleepFlag;
            }
            this.m_body.setBullet(this.m_bullet);
            this.m_body.applyForce(this.m_force, this.m_body.getWorldCenter());
            this.m_body.applyTorque(this.m_torque);
            this.m_body.m_type = this.m_static ? org.jbox2d.dynamics.Body.e_staticType : org.jbox2d.dynamics.Body.e_dynamicType;
            let sd = this.getProcessedShapeDef();
            if (sd != null) {
                this.processBody(this.m_body, sd);
            }
            let bodies = this.getBodies();
            let sds = this.getShapeDefs();
            if (sds.length !== bodies.length) {
                for (let i = 0; i < sds.length; i++) {
                    {
                        sd = (sds[i]);
                        if (sd != null) {
                            this.processBody(this.m_body, sd);
                        }
                    }
                    ;
                }
            }
            else {
                for (let i = 0; i < sds.length; i++) {
                    {
                        let b = (bodies[i]);
                        sd = (sds[i]);
                        if (sd != null) {
                            b.processBody(this.m_body, sd);
                        }
                    }
                    ;
                }
            }
            this.updateMass();
        }
        setState(b) {
            if (b == null || b.m_body == null) {
                return;
            }
            this.m_linearVelocity = b.m_body.getLinearVelocity();
            this.m_angularVelocity = b.m_body.getAngularVelocity();
            this.m_position = b.m_body.getMemberXForm().position;
            this.m_angle = b.m_body.getAngle();
            this.m_force = b.m_body.m_force;
            this.m_torque = b.m_body.m_torque;
        }
        setStateFromWorld() {
            if (this.m_body == null) {
                return;
            }
            this.m_linearVelocity = this.m_body.getLinearVelocity();
            this.m_angularVelocity = this.m_body.getAngularVelocity();
            this.m_position = this.m_body.getMemberXForm().position;
            this.m_angle = this.m_body.getAngle();
            this.m_force = this.m_body.m_force;
            this.m_torque = this.m_body.m_torque;
        }
        recreateInWorld() {
            if (this.m_body == null)
                return;
            this.setStateFromWorld();
            this.m_world.remove$fisica_FBody(this);
            this.m_world.add$fisica_FBody(this);
        }
        removeFromWorld() {
            if (this.m_body == null)
                return;
            this.m_world.destroyBody(this.m_body);
            this.m_body = null;
            this.m_world = null;
        }
        getShapeDef() {
            return null;
        }
        getTransformedShapeDef() {
            return this.getShapeDef();
        }
        getProcessedShapeDef() {
            let sd = this.getShapeDef();
            if (sd != null) {
                sd.isSensor = this.m_sensor;
                sd.filter.groupIndex = this.m_groupIndex;
                sd.filter.maskBits = this.m_filterBits;
                sd.filter.categoryBits = this.m_categoryBits;
            }
            return sd;
        }
        getShapeDefs() {
            return ([]);
        }
        getBodies() {
            return ([]);
        }
        processShapeDef(sd) {
            if (sd != null) {
                sd.isSensor = this.m_sensor;
                sd.filter.groupIndex = this.m_groupIndex;
                sd.filter.maskBits = this.m_filterBits;
                sd.filter.categoryBits = this.m_categoryBits;
            }
            return sd;
        }
        preDraw(applet) {
            applet.pushStyle();
            applet.pushMatrix();
            this.applyMatrix(applet);
            applet.ellipseMode(PConstants.CENTER);
            applet.rectMode(PConstants.CENTER);
            this.appletFillStroke(applet);
        }
        postDraw(applet) {
            applet.popMatrix();
            applet.popStyle();
        }
        preDrawDebug(applet) {
            applet.pushStyle();
            applet.pushMatrix();
            this.applyMatrix(applet);
            applet.ellipseMode(PConstants.CENTER);
            applet.rectMode(PConstants.CENTER);
            applet.strokeWeight(1);
            if (this.m_body != null) {
                applet.fill(0, 200, 0, 50);
                applet.stroke(0, 200, 0, 150);
            }
            if (this.isSleeping()) {
                applet.fill(200, 0, 0, 50);
                applet.stroke(200, 0, 0, 150);
            }
            if (this.isStatic()) {
                applet.fill(0, 0, 200, 50);
                applet.stroke(0, 0, 200, 150);
            }
            if (this.isSensor()) {
                applet.noStroke();
            }
        }
        postDrawDebug(applet) {
            if (this.m_body != null) {
                applet.fill(0, 200, 0, 150);
            }
            if (this.isSleeping()) {
                applet.fill(200, 0, 0, 150);
            }
            if (this.isStatic()) {
                applet.fill(0, 0, 200, 150);
            }
            applet.line(-3, 0, 3, 0);
            applet.line(0, -3, 0, 3);
            applet.popMatrix();
            if (this.getBox2dBody() != null) {
                applet.pushStyle();
                applet.stroke(120, 40);
                applet.noFill();
                applet.rectMode(PConstants.CORNERS);
                let aabb = this.getAABB();
                let lower = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(aabb.lowerBound);
                let upper = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(aabb.upperBound);
                applet.rect(lower.x, lower.y, upper.x, upper.y);
                applet.popStyle();
                applet.pushMatrix();
                let cent = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.getBox2dBody().getWorldCenter());
                applet.translate(cent.x, cent.y);
                applet.pushStyle();
                applet.noStroke();
                applet.rect(0, 0, 3, 3);
                applet.popStyle();
                applet.popMatrix();
                let infobox = "";
                let df = new Object();
                df.setMaximumFractionDigits(1);
                let bb = this.getBB();
                let dim = new org.jbox2d.common.Vec2(bb.upperBound);
                dim = dim.sub(bb.lowerBound);
                let width = dim.x;
                let height = dim.y;
                infobox += "w: ";
                if (width <= 0.001) {
                    infobox += df.format(width * 100.0) + "cm";
                }
                else {
                    infobox += df.format(width) + "m";
                }
                infobox += "\n";
                infobox += "h: ";
                if (height <= 0.001) {
                    infobox += df.format(height * 100.0) + "cm";
                }
                else {
                    infobox += df.format(height) + "m";
                }
                infobox += "\n";
                if (!this.isStatic()) {
                    let m = this.getMass();
                    if (m <= 1000) {
                        infobox += "m: " + df.format(this.getMass()) + "g\n";
                    }
                    else {
                        infobox += "m: " + df.format(this.getMass() / 1000.0) + "Kg\n";
                    }
                }
                applet.text(infobox, Math.fround(upper.x + 4), Math.fround(lower.y - 4));
            }
            applet.popStyle();
        }
        getAABB() {
            let result = new org.jbox2d.collision.AABB();
            let first = true;
            let b = this.getBox2dBody();
            if (b == null) {
                return result;
            }
            let temp = new org.jbox2d.collision.AABB();
            let tempXForm = b.getXForm();
            if (b != null) {
                let ss = b.getShapeList();
                while ((ss != null)) {
                    {
                        ss.computeAABB(temp, tempXForm);
                        if (first) {
                            result = new org.jbox2d.collision.AABB(temp);
                            first = false;
                        }
                        else {
                            result = new org.jbox2d.collision.AABB(org.jbox2d.common.Vec2.min(result.lowerBound, temp.lowerBound), org.jbox2d.common.Vec2.max(result.upperBound, temp.upperBound));
                        }
                        ss = ss.getNext();
                    }
                }
                ;
            }
            return result;
        }
        getBB() {
            let result = new org.jbox2d.collision.AABB();
            let first = true;
            let b = this.getBox2dBody();
            if (b == null) {
                return result;
            }
            let temp = new org.jbox2d.collision.AABB();
            let tempXForm = b.getXForm();
            tempXForm.setIdentity();
            if (b != null) {
                let ss = b.getShapeList();
                while ((ss != null)) {
                    {
                        ss.computeAABB(temp, tempXForm);
                        if (first) {
                            result = new org.jbox2d.collision.AABB(temp);
                            first = false;
                        }
                        else {
                            result = new org.jbox2d.collision.AABB(org.jbox2d.common.Vec2.min(result.lowerBound, temp.lowerBound), org.jbox2d.common.Vec2.max(result.upperBound, temp.upperBound));
                        }
                        ss = ss.getNext();
                    }
                }
                ;
            }
            return result;
        }
        applyMatrix(applet) {
            applet.translate(this.getX(), this.getY());
            applet.rotate(this.getRotation());
        }
        /**
         * Control the group to which this body belongs.  Groups allow to select the bodies that may collide together or with others.  If the group index is negative then they will not collide with each other but they will collide with all the bodies of the other groups.
         *
         * @param {number} index  the index of the group
         */
        setGroupIndex(index) {
            this.m_groupIndex = index;
            this.recreateInWorld();
        }
        setFilterBits(mask) {
            this.m_filterBits = mask;
            this.recreateInWorld();
        }
        setCategoryBits(mask) {
            this.m_categoryBits = mask;
            this.recreateInWorld();
        }
        getCategoryBits() {
            return this.m_categoryBits;
        }
        getFilterBits() {
            return this.m_filterBits;
        }
        setParent(b) {
            this.m_parent = b;
        }
        getParent() {
            return this.m_parent;
        }
        /**
         * Control if this body can be grabbed by the mouse, when clicked on.  This property only has effect if the world is grabbable. If a body is grabbable, then it can be dragged around by the mouse.
         *
         * @see FWorld#setGrabbable(boolean)
         *
         * @param {boolean} value if {@code true} and the world it belongs to is grabbable, then the body is grabbable by the mouse
         */
        setGrabbable(value) {
            this.m_grabbable = value;
        }
        /**
         * Set the force applied to the center of the body.
         *
         * @see #addForce(float,float)
         *
         * @param {number} fx the x coordinate of the force
         * @param {number} fy the y coordinate of the force
         */
        setForce(fx, fy) {
            this.resetForces();
            this.addForce$float$float(fisica.Fisica.screenToWorld$float(fx), fisica.Fisica.screenToWorld$float(fy));
        }
        /**
         * Get the x coordinate of the force applied to the center of the body.
         *
         * @see #addForce(float,float)
         * @see #getForceY()
         *
         * @return {number} the x coordinate of the force
         */
        getForceX() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_force).x;
        }
        /**
         * Get the y coordinate of the force applied to the center of the body.
         *
         * @see #addForce(float,float)
         * @see #getForceX()
         *
         * @return {number} the y coordinate of the force
         */
        getForceY() {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_force).y;
        }
        /**
         * Add a rotation force (a torque) to the body.
         *
         * @see #addForce(float,float)
         * @see #addForce(float,float,float,float)
         *
         * @param {number} torque the value of the torque
         */
        addTorque(torque) {
            if (this.m_body != null) {
                this.m_body.applyTorque(torque);
            }
            this.m_torque += torque;
        }
        addForce$float$float(fx, fy) {
            if (this.m_body != null) {
                this.m_body.applyForce(fisica.Fisica.screenToWorld$float$float(fx, fy), this.m_body.getWorldCenter());
            }
            this.m_force.x += fisica.Fisica.screenToWorld$float(fx);
            this.m_force.y += fisica.Fisica.screenToWorld$float(fy);
        }
        addImpulse$float$float(fx, fy) {
            if (this.m_body != null) {
                this.m_body.applyImpulse(fisica.Fisica.screenToWorld$float$float(fx, fy), this.m_body.getWorldCenter());
            }
            this.m_force.x += fisica.Fisica.screenToWorld$float(fx);
            this.m_force.y += fisica.Fisica.screenToWorld$float(fy);
        }
        addForce$float$float$float$float(fx, fy, px, py) {
            if (this.m_body != null) {
                this.m_body.applyForce(fisica.Fisica.screenToWorld$float$float(fx, fy), this.m_body.getWorldCenter().add(fisica.Fisica.screenToWorld$float$float(px, py)));
            }
        }
        /**
         * Apply a force to a given point of the body.  If the force is not applied on the center of the body this force might induce a rotation change.  It would be as applying a force on the center of the body and a torque.
         *
         * @see #addTorque(float)
         * @see #addImpulse(float,float,float,float)
         *
         * @param {number} fx the x coordinate of the force
         * @param {number} fy the y coordinate of the force
         * @param {number} px the x position relative to the body's center, where to apply the force
         * @param {number} py the y position relative to the body's center, where to apply the force
         */
        addForce(fx, fy, px, py) {
            if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && ((typeof px === 'number') || px === null) && ((typeof py === 'number') || py === null)) {
                return this.addForce$float$float$float$float(fx, fy, px, py);
            }
            else if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && px === undefined && py === undefined) {
                return this.addForce$float$float(fx, fy);
            }
            else
                throw new Error('invalid overload');
        }
        addImpulse$float$float$float$float(fx, fy, px, py) {
            if (this.m_body != null) {
                this.m_body.applyImpulse(fisica.Fisica.screenToWorld$float$float(fx, fy), this.m_body.getWorldCenter().add(fisica.Fisica.screenToWorld$float$float(px, py)));
            }
        }
        /**
         * Apply an impulse to a given point of the body.  If the impulse is not applied on the center of the body this force might induce a rotation change.  It would be as applying a force on the center of the body and a torque.
         *
         * @see #addTorque(float)
         * @see #addForce(float,float,float,float)
         *
         * @param {number} fx the x coordinate of the force
         * @param {number} fy the y coordinate of the force
         * @param {number} px the x position relative to the body's center, where to apply the force
         * @param {number} py the y position relative to the body's center, where to apply the force
         */
        addImpulse(fx, fy, px, py) {
            if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && ((typeof px === 'number') || px === null) && ((typeof py === 'number') || py === null)) {
                return this.addImpulse$float$float$float$float(fx, fy, px, py);
            }
            else if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && px === undefined && py === undefined) {
                return this.addImpulse$float$float(fx, fy);
            }
            else
                throw new Error('invalid overload');
        }
        /**
         * Remove all the forces that are applied to the body.
         */
        resetForces() {
            if (this.m_body != null) {
                this.m_body.m_force.setZero();
                this.m_body.m_torque = 0.0;
            }
            this.m_force.setZero();
            this.m_torque = 0.0;
        }
        /**
         * Returns the horizontal velocity of the body.
         *
         * @return {number} the horizontal velocity of the body in pixels per second
         */
        getVelocityX() {
            if (this.m_body != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_body.getLinearVelocity()).x;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_linearVelocity).x;
        }
        /**
         * Returns the vertical velocity of the body.
         *
         * @return {number} the vertical velocity of the body in pixels per second
         */
        getVelocityY() {
            if (this.m_body != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_body.getLinearVelocity()).y;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_linearVelocity).y;
        }
        /**
         * Set the velocity of the body.
         *
         * @param {number} vx  the horizontal velocity of the body in pixels per second
         * @param {number} vy  the vertical velocity of the body in pixels per second
         */
        setVelocity(vx, vy) {
            if (this.m_body != null) {
                this.m_body.setLinearVelocity(fisica.Fisica.screenToWorld$float$float(vx, vy));
                this.m_body.wakeUp();
            }
            this.m_linearVelocity = fisica.Fisica.screenToWorld$float$float(vx, vy);
        }
        /**
         * Adjust the velocity of the body.
         *
         * @param {number} dvx  the horizontal velocity to be added to the body in pixels per second
         * @param {number} dvy  the vertical velocity to be added to the body in pixels per second
         */
        adjustVelocity(dvx, dvy) {
            if (this.m_body != null) {
                this.m_body.setLinearVelocity(fisica.Fisica.screenToWorld$float$float(Math.fround(this.getVelocityX() + dvx), Math.fround(this.getVelocityY() + dvy)));
                this.m_body.wakeUp();
            }
            this.m_linearVelocity = fisica.Fisica.screenToWorld$float$float(Math.fround(this.getVelocityX() + dvx), Math.fround(this.getVelocityY() + dvy));
        }
        /**
         * Returns the horizontal position of the body.
         *
         * @return {number} the horizontal position of the body in pixels
         * @see #getY
         * @see #setPosition(float,float)
         */
        getX() {
            if (this.m_body != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_body.getMemberXForm().position).x;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).x;
        }
        /**
         * Returns the vertical position of the body.
         *
         * @return {number} the vertical position of the body in pixels
         * @see #getX
         * @see #setPosition(float,float)
         */
        getY() {
            if (this.m_body != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_body.getMemberXForm().position).y;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).y;
        }
        setPosition$float$float(x, y) {
            if (this.m_body != null) {
                this.m_body.setXForm(fisica.Fisica.screenToWorld$float$float(x, y), this.m_body.getAngle());
            }
            this.m_position = fisica.Fisica.screenToWorld$float$float(x, y);
        }
        /**
         * Set the position of the body.
         *
         * @param {number} x  the horizontal position of the body in pixels
         * @param {number} y  the vertical position of the body in pixels
         */
        setPosition(x, y) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return this.setPosition$float$float(x, y);
            }
            else if (((x != null && x instanceof org.jbox2d.common.Vec2) || x === null) && y === undefined) {
                return this.setPosition$org_jbox2d_common_Vec2(x);
            }
            else
                throw new Error('invalid overload');
        }
        setPosition$org_jbox2d_common_Vec2(position) {
            if (this.m_body != null) {
                this.m_body.setXForm(position, this.m_body.getAngle());
            }
            this.m_position = fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(position);
        }
        /**
         * Adjust the position of the body.
         *
         * @param {number} dx  the horizontal position to be added to the body in pixels
         * @param {number} dy  the vertical position to be added to the body in pixels
         */
        adjustPosition(dx, dy) {
            if (this.m_body != null) {
                this.m_body.setXForm(fisica.Fisica.screenToWorld$float$float(Math.fround(this.getX() + dx), Math.fround(this.getY() + dy)), this.m_body.getAngle());
            }
            this.m_position = fisica.Fisica.screenToWorld$float$float(Math.fround(this.getX() + dx), Math.fround(this.getY() + dy));
        }
        /**
         * Returns the rotation of the body.
         *
         * @return {number} the rotation of the body in radians
         * @see #setRotation(float)
         */
        getRotation() {
            if (this.m_body != null) {
                return this.m_body.getAngle();
            }
            return this.m_angle;
        }
        /**
         * Set the rotation of the body.
         *
         * @param {number} w  the rotation of the body in radians
         * @see #getRotation()
         */
        setRotation(w) {
            if (this.m_body != null) {
                this.m_body.setXForm(this.m_body.getMemberXForm().position, w);
            }
            this.m_angle = w;
        }
        /**
         * Adjust the rotation of the body.
         *
         * @param {number} dw  the rotation to be added to the body in radians
         * @see #getRotation()
         * @see #setRotation(float)
         */
        adjustRotation(dw) {
            if (this.m_body != null) {
                this.m_body.setXForm(this.m_body.getMemberXForm().position, Math.fround(this.m_body.getAngle() + dw));
            }
            this.m_angle += dw;
        }
        /**
         * Deprecated. Please use isSleeping().
         *
         * @return {boolean} true if the body is resting
         */
        isResting() {
            return this.isSleeping();
        }
        /**
         * Indicates whether the body is in a sleeping state.
         *
         * The sleeping state of a body is reached when it has not moved or has not received any forces nor collisions for some time.
         *
         * @return {boolean} true if the body is sleeping
         * @see #wakeUp()
         * @see #setAllowSleeping(boolean)
         */
        isSleeping() {
            if (this.m_body != null) {
                return this.m_body.isSleeping();
            }
            return this.m_isSleeping;
        }
        /**
         * Wake up the body from a sleeping state.
         *
         * @see #isSleeping()
         * @see #setAllowSleeping(boolean)
         */
        wakeUp() {
            if (this.m_body == null) {
                return;
            }
            this.m_body.wakeUp();
        }
        /**
         * Returns the rotation velocity of the body.
         *
         * @return {number} the rotation velocity of the body in radians per second
         * @see #setAngularVelocity(float)
         * @see #adjustAngularVelocity(float)
         */
        getAngularVelocity() {
            if (this.m_body != null) {
                return this.m_body.getAngularVelocity();
            }
            return this.m_angularVelocity;
        }
        /**
         * Set the rotation velocity of the body.
         *
         * @param {number} w   the rotation velocity of the body in radians per second
         */
        setAngularVelocity(w) {
            if (this.m_body != null) {
                this.m_body.setAngularVelocity(w);
                this.m_body.wakeUp();
            }
            this.m_angularVelocity = w;
        }
        /**
         * Adjust the rotation velocity of the body.
         *
         * @param {number} dw   the rotation velocity to be added to the body in radians per second
         * @see #getAngularVelocity()
         * @see #setAngularVelocity(float)
         */
        adjustAngularVelocity(dw) {
            if (this.m_body != null) {
                this.m_body.setAngularVelocity(Math.fround(this.m_body.getAngularVelocity() + dw));
                this.m_body.wakeUp();
            }
            this.m_angularVelocity += dw;
        }
        /**
         * Set the damping of the rotation movement of the body.  The damping constantly reduces the rotation velocity of the body.
         *
         * @param {number} damping   the damping of the rotation movement of the body
         * @see #setDamping(float)
         */
        setAngularDamping(damping) {
            if (this.m_body != null) {
                this.m_body.m_angularDamping = damping;
            }
            this.m_angularDamping = damping;
        }
        /**
         * Set the damping of the translation movement of the body.  The damping constantly reduces the translation velocity of the body.
         *
         * @param {number} damping   the damping of the translation movement of the body
         * @see #setAngularDamping(float)
         */
        setDamping(damping) {
            if (this.m_body != null) {
                this.m_body.m_linearDamping = damping;
            }
            this.m_linearDamping = damping;
        }
        /**
         * Set the name of the body.
         *
         * @param {string} name   the name of the body
         */
        setName(name) {
            this.m_name = name;
        }
        /**
         * Get the name of the body.
         *
         * @return {string} name    the name of the body
         */
        getName() {
            return this.m_name;
        }
        /**
         * Set the density of the body.  The density will determine the total mass of the body and thus it's behavior with respect to collisions, bounces, inertia, joints,...  When the density is set, the mass of the body is recalculated automatically given it's area.
         *
         * Note that a density of 0.0 corresponds to a mass of 0.0 independently of the area and the body will be considered static.
         *
         * @param {number} density   the density of the body
         */
        setDensity(density) {
            this.m_density = density;
            this.updateMass();
        }
        /**
         * Get the density of the body.  The density determines the total mass of the body and thus it's behavior with respect to collisions, bounces, inertia, joints,...
         *
         * Note that a density of 0.0 corresponds to a mass of 0.0 independently of the area and the body will be considered static.
         *
         * @return {number} density   the density of the body
         */
        getDensity() {
            return this.m_density;
        }
        updateMass() {
            if (this.m_body == null) {
                return;
            }
            for (let s = this.m_body.getShapeList(); s != null; s = s.m_next) {
                {
                    s.m_density = this.m_static ? 0.0 : this.m_density;
                }
                ;
            }
            this.m_body.setMassFromShapes();
        }
        /**
         * Set whether the body is a sensor.  Sensor bodies act as normal bodies in the sense that they notify about contacts, however they do not collide with other bodies (they act like ghost bodies).
         *
         * @param {boolean} value   if {@code true} the body will be a sensor.  It will not collide when enters contact with other bodies
         */
        setSensor(value) {
            if (this.m_body != null) {
                for (let s = this.m_body.getShapeList(); s != null; s = s.m_next) {
                    {
                        s.m_isSensor = value;
                    }
                    ;
                }
            }
            this.m_sensor = value;
        }
        /**
         * Returns whether the body is a sensor.  Sensor bodies act as normal bodies in the sense that they notify about contacts, however they do not collide with other bodies (they act like ghost bodies).
         *
         * @return   {boolean} if {@code true} the body is a sensor.  It will not collide when enters contact with other bodies
         */
        isSensor() {
            return this.m_sensor;
        }
        /**
         * Set whether the body is static.  Static bodies do not move or rotate, unless done manually using {@link #setPosition(float,float) setPosition} or {@link #setRotation(float) setRotation}.
         *
         * @param {boolean} value   if {@code true} the body will be static
         */
        setStaticBody(value) {
            this.setStatic(value);
        }
        /**
         * Set whether the body is static.  Static bodies do not move or rotate, unless done manually using {@link #setPosition(float,float) setPosition} or {@link #setRotation(float) setRotation}.
         *
         * @param {boolean} value   if {@code true} the body will be static
         */
        setStatic(value) {
            if (this.m_body != null) {
                this.m_body.m_type = value ? org.jbox2d.dynamics.Body.e_staticType : org.jbox2d.dynamics.Body.e_dynamicType;
            }
            this.m_static = value;
            this.updateMass();
        }
        /**
         * Returns the mass of the body.  Static bodies or bodies not added to the world return 0.
         *
         * @return   {number} the mass of the body or 0 if static
         */
        getMass() {
            if (this.m_body != null) {
                return this.m_body.getMass();
            }
            return 0.0;
        }
        /**
         * Returns whether the body is static.  Static bodies do not move or rotate, unless done manually using {@link #setPosition(float,float) setPosition} or {@link #setRotation(float) setRotation}.
         *
         * @return   {boolean} if {@code true} the body is static
         */
        isStatic() {
            if (this.m_body != null) {
                return this.m_body.isStatic();
            }
            return this.m_static;
        }
        /**
         * Set whether the body is a bullet.  Bullet bodies are computationally more expensive but more accurate in their movement.  Use this only with fast objects.
         *
         * @param {boolean} value   if {@code true} the body will be a bullet
         */
        setBullet(value) {
            if (this.m_body != null) {
                this.m_body.setBullet(value);
            }
            this.m_bullet = value;
        }
        /**
         * Set the restitution of the body.  The restitution determines the ratio of the reaction force normal to a contact, when the body collides with another body.  Basically it can be seen as a coefficient that will control the strength with which the body bounces back from a collision.  The resititution of a contact of two bodies in a collision is calculated as the maximum of the restitution values of the 2 bodies involved.
         *
         * @param {number} restitution   a positive value.  A value of 0 means no bounce after a collision, and a value of 1 means bounce with it's full speed from a collision
         */
        setRestitution(restitution) {
            if (this.m_body != null) {
                for (let s = this.m_body.getShapeList(); s != null; s = s.m_next) {
                    {
                        s.setRestitution(restitution);
                    }
                    ;
                }
            }
            this.m_restitution = restitution;
        }
        /**
         * Set the friction of the body.  The friction determines the ratio of the reaction force tangent to a contact, when the body collides with another body.  Basically it can be seen as a coefficient that will control how the body gets slown down when the body slides against another body.  The friction of a contact of two bodies in a collision is calculated from the friction values of the 2 bodies involved.
         *
         * @param {number} friction   a positive value.  A value of 0 means no friction and thus the body will not be slown down if no other forces are applied
         */
        setFriction(friction) {
            if (this.m_body != null) {
                for (let s = this.m_body.getShapeList(); s != null; s = s.m_next) {
                    {
                        s.setFriction(friction);
                    }
                    ;
                }
            }
            this.m_friction = friction;
        }
        /**
         * Set whether the body can rotate.
         *
         * @param {boolean} rotatable   if {@code true} the body will not rotate
         */
        setRotatable(rotatable) {
            if (this.m_body != null) {
                if (rotatable) {
                    this.m_body.m_flags &= ~org.jbox2d.dynamics.Body.e_fixedRotationFlag;
                }
                else {
                    this.m_body.m_flags |= org.jbox2d.dynamics.Body.e_fixedRotationFlag;
                }
            }
            this.m_rotatable = rotatable;
        }
        /**
         * Set whether the body can sleep.
         *
         * @param {boolean} allowSleep if {@code true} the body will be able to sleep
         */
        setAllowSleeping(allowSleep) {
            if (this.m_body != null) {
                if (allowSleep) {
                    this.m_body.m_flags |= org.jbox2d.dynamics.Body.e_allowSleepFlag;
                }
                else {
                    this.m_body.m_flags &= ~org.jbox2d.dynamics.Body.e_allowSleepFlag;
                    this.m_body.wakeUp();
                }
            }
            this.m_allowSleep = allowSleep;
        }
        /**
         * Return a list of bodies currently touching the body.
         *
         * @return   {Array} list of bodies (ArrayList of FBody) touching the body
         */
        getTouching() {
            let result = ([]);
            if (this.m_world == null) {
                return result;
            }
            let contacts = ((m) => { let r = []; if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                r.push(m.entries[i].value); return r; })(this.m_world.m_contacts);
            let iter = ((a) => { var i = 0; return { next: function () { return i < a.length ? a[i++] : null; }, hasNext: function () { return i < a.length; } }; })(contacts);
            while ((iter.hasNext())) {
                {
                    let contact = iter.next();
                    if (this === contact.getBody1()) {
                        /* add */ (result.push(contact.getBody2()) > 0);
                    }
                    else if (this === contact.getBody2()) {
                        /* add */ (result.push(contact.getBody1()) > 0);
                    }
                }
            }
            ;
            return result;
        }
        /**
         * Return a list of contacts currently involving the body.
         *
         * @return   {Array} list of contacts (ArrayList of FContact) touching the body
         */
        getContacts() {
            let result = ([]);
            if (this.m_world == null) {
                return result;
            }
            let contacts = ((m) => { let r = []; if (m.entries == null)
                m.entries = []; for (let i = 0; i < m.entries.length; i++)
                r.push(m.entries[i].value); return r; })(this.m_world.m_contacts);
            let iter = ((a) => { var i = 0; return { next: function () { return i < a.length ? a[i++] : null; }, hasNext: function () { return i < a.length; } }; })(contacts);
            while ((iter.hasNext())) {
                {
                    let contact = iter.next();
                    if (this === contact.getBody1() || this === contact.getBody2()) {
                        /* add */ (result.push(contact) > 0);
                    }
                }
            }
            ;
            return result;
        }
        /**
         * Returns a list with all the joints with a connection to the body
         *
         * @return    {Array} an ArrayList (of FJoint) connected to the body
         */
        getJoints() {
            let result = ([]);
            if (this.m_body != null) {
                for (let jn = this.m_body.getJointList(); jn != null; jn = jn.next) {
                    {
                        let j = (jn.joint.m_userData);
                        if (j != null) {
                            /* add */ (result.push(j) > 0);
                        }
                    }
                    ;
                }
            }
            return result;
        }
        /**
         * Returns true if the body is joint to the body passed as argument
         *
         * @param {fisica.FBody} other  the other body
         * @return     {boolean} if {@code true} the body is connected to other
         */
        isConnected(other) {
            if (this.m_body != null) {
                for (let jn = this.m_body.getJointList(); jn != null; jn = jn.next) {
                    {
                        let b = (jn.other.m_userData);
                        if (jn.other.m_userData === other) {
                            return (jn.joint.m_collideConnected === false);
                        }
                    }
                    ;
                }
            }
            return false;
        }
        /**
         * Return whether the body is currently touching the body passed as argument.
         *
         * @param {fisica.FBody} b  the body for which we want to know if there is contact
         * @return   {boolean} if {@code true} the body is touching b
         */
        isTouchingBody(b) {
            return (this.getTouching().indexOf((b)) >= 0);
        }
        getLocalWorldPoint(p) {
            if (this.m_body != null) {
                let v = this.m_body.getLocalPoint(p);
                return v;
            }
            let xf = new org.jbox2d.common.XForm();
            xf.position.set(fisica.Fisica.screenToWorld$float$float(this.getX(), this.getY()));
            xf.R.set(this.getRotation());
            return org.jbox2d.common.XForm.mulTrans(xf, p);
        }
    }
    fisica.FBody = FBody;
    FBody["__class"] = "fisica.FBody";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Represents a joint between two or more bodies.
     *
     * A joint establishes some kind of relation between two or more bodies.  Depending on the specific joint the relation might be a distance relation, a rotation relation or even a volume conservation relation.  This class cannot be be instantiated, instead use one of the derived classes.
     * @class
     * @extends fisica.FDrawable
     */
    class FJoint extends fisica.FDrawable {
        constructor() {
            super();
            this.m_collideConnected = true;
            if (this.m_joint === undefined)
                this.m_joint = null;
            if (this.m_world === undefined)
                this.m_world = null;
        }
        /**
         * WARNING: This method is internal only and may change someday.  If you are using this method please contact the developer since there should be a better way or we may add something to the library.
         *
         * @return {org.jbox2d.dynamics.joints.Joint} the internal JBox2D joint
         */
        getBox2dJoint() {
            return this.m_joint;
        }
        processJoint(world, jd) {
            jd.collideConnected = this.m_collideConnected;
            this.m_joint = world.createJoint(jd);
        }
        addToWorld(world) {
            this.m_world = world;
            let jd = this.getJointDef(world);
            if (jd == null)
                return;
            this.processJoint(this.m_world, jd);
            this.m_joint.m_userData = this;
        }
        removeFromWorld() {
            if (this.m_joint == null)
                return;
            this.m_world.destroyJoint(this.m_joint);
            this.m_joint = null;
            this.m_world = null;
        }
        getJointDef(world) {
            return null;
        }
        preDraw(applet) {
            applet.pushStyle();
            applet.pushMatrix();
            applet.ellipseMode(PConstants.CENTER);
            applet.rectMode(PConstants.CENTER);
            this.appletFillStroke(applet);
        }
        postDraw(applet) {
            applet.popMatrix();
            applet.popStyle();
        }
        preDrawDebug(applet) {
            applet.pushStyle();
            applet.pushMatrix();
            applet.ellipseMode(PConstants.CENTER);
            applet.rectMode(PConstants.CENTER);
            applet.strokeWeight(1);
            applet.fill(80, 50);
            applet.stroke(80, 150);
        }
        postDrawDebug(applet) {
            applet.popMatrix();
            applet.popStyle();
        }
        /**
         *
         * Returns the first body attached to this joint.
         * @return {fisica.FBody} first of the bodies connected by this joint
         */
        getBody1() {
            if (this.m_joint != null) {
                return this.m_joint.m_body1.getUserData();
            }
            return null;
        }
        /**
         *
         * Returns the second body attached to this joint.
         * @return {fisica.FBody} second of the bodies connected by this joint
         */
        getBody2() {
            if (this.m_joint != null) {
                return this.m_joint.m_body2.getUserData();
            }
            return null;
        }
        /**
         *
         * Sets whether the bodies connected by the joint should collide with each other.
         *
         * @param {boolean} value  if {@code true} the bodies connected by this joint will be allowed to collide with each other
         */
        setCollideConnected(value) {
            if (this.m_joint != null) {
                this.m_joint.m_collideConnected = value;
            }
            this.m_collideConnected = value;
        }
        /**
         * Returns the horizontal component of the reaction force on the second body at the joint anchor.
         * @return {number} horizontal component of the reaction force
         */
        getReactionForceX() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getReactionForce()).x;
            }
            return 0.0;
        }
        /**
         *
         * Returns the vertical component of the reaction force on the second body at the joint anchor.
         * @return {number} vertical component of the reaction force
         */
        getReactionForceY() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getReactionForce()).y;
            }
            return 0.0;
        }
        /**
         *
         * Returns the reaction torque on the second body at the joint anchor.
         * @return {number} reaction torque
         */
        getReactionTorque() {
            if (this.m_joint != null) {
                return this.m_joint.getReactionTorque();
            }
            return 0.0;
        }
    }
    fisica.FJoint = FJoint;
    FJoint["__class"] = "fisica.FJoint";
})(fisica || (fisica = {}));
(function (fisica) {
    class FAddBodyAction extends fisica.FWorldAction {
        constructor(body) {
            super();
            if (this.m_body === undefined)
                this.m_body = null;
            this.m_body = body;
        }
        apply(world) {
            world.addBody(this.m_body);
        }
    }
    fisica.FAddBodyAction = FAddBodyAction;
    FAddBodyAction["__class"] = "fisica.FAddBodyAction";
})(fisica || (fisica = {}));
(function (fisica) {
    class FAddJointAction extends fisica.FWorldAction {
        constructor(joint) {
            super();
            if (this.m_joint === undefined)
                this.m_joint = null;
            this.m_joint = joint;
        }
        apply(world) {
            world.addJoint(this.m_joint);
        }
    }
    fisica.FAddJointAction = FAddJointAction;
    FAddJointAction["__class"] = "fisica.FAddJointAction";
})(fisica || (fisica = {}));
(function (fisica) {
    class FRemoveBodyAction extends fisica.FWorldAction {
        constructor(body) {
            super();
            if (this.m_body === undefined)
                this.m_body = null;
            this.m_body = body;
        }
        apply(world) {
            world.removeBody(this.m_body);
        }
    }
    fisica.FRemoveBodyAction = FRemoveBodyAction;
    FRemoveBodyAction["__class"] = "fisica.FRemoveBodyAction";
})(fisica || (fisica = {}));
(function (fisica) {
    class FRemoveJointAction extends fisica.FWorldAction {
        constructor(joint) {
            super();
            if (this.m_joint === undefined)
                this.m_joint = null;
            this.m_joint = joint;
        }
        apply(world) {
            world.removeJoint(this.m_joint);
        }
    }
    fisica.FRemoveJointAction = FRemoveJointAction;
    FRemoveJointAction["__class"] = "fisica.FRemoveJointAction";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs a blob body that can be added to a world. It creates an empty
     * blob, before adding the blob to the world use {@link #vertex(float,float)
     * vertex} or {@link #setAsCircle(float) setAsCircle} to define the initial
     * shape of the blob.
     * @class
     * @extends fisica.FBody
     */
    class FBlob extends fisica.FBody {
        constructor() {
            super();
            this.m_damping = 0.0;
            this.m_frequency = 0.0;
            this.m_vertexSize = 0.4;
            this.m_force = new org.jbox2d.common.Vec2();
            this.m_torque = 0.0;
            this.m_density = 1.0;
            this.m_restitution = 0.5;
            this.m_friction = 0.5;
            this.m_bullet = false;
            if (this.m_vertices === undefined)
                this.m_vertices = null;
            if (this.m_vertexBodies === undefined)
                this.m_vertexBodies = null;
            if (this.m_joint === undefined)
                this.m_joint = null;
            this.m_vertices = ([]);
            this.m_vertexBodies = ([]);
        }
        addToWorld(world) {
            this.m_joint = new fisica.FConstantVolumeJoint();
            this.m_joint.setFrequency(this.m_frequency);
            this.m_joint.setDamping(this.m_damping);
            this.m_joint.updateStyle(this);
            for (let i = 0; i < this.m_vertices.length; i++) {
                {
                    let p = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]);
                    let fb = new fisica.FCircle(this.getVertexSize());
                    fb.setPosition$float$float(p.x, p.y);
                    fb.setDensity(this.m_density);
                    fb.setRestitution(this.m_restitution);
                    fb.setFriction(this.m_friction);
                    fb.setGroupIndex(this.m_groupIndex);
                    fb.setFilterBits(this.m_filterBits);
                    fb.setCategoryBits(this.m_categoryBits);
                    fb.setState(this);
                    /* add */ (this.m_vertexBodies.push(fb) > 0);
                }
                ;
            }
            for (let i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    let fb = this.m_vertexBodies[i];
                    fb.setDrawable(false);
                    fb.setParent(this);
                    fb.setRotatable(false);
                    world.add$fisica_FBody(fb);
                    let f = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_force);
                    fb.addForce$float$float(f.x, f.y);
                    fb.addTorque(this.m_torque);
                    this.m_joint.addBody(fb);
                }
                ;
            }
            this.m_joint.setCollideConnected(false);
            world.add$fisica_FJoint(this.m_joint);
        }
        removeFromWorld() {
            this.m_joint.removeFromWorld();
            for (let i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    (this.m_vertexBodies[i]).removeFromWorld();
                }
                ;
            }
        }
        /**
         * Adds a vertex body to the initial shape of the blob. This method must be
         * called before adding the body to the world.
         *
         * @param {fisica.FBody} b
         * b the body to be added
         */
        addVertexBody(b) {
            /* add */ (this.m_vertexBodies.push(b) > 0);
        }
        /**
         * Adds a vertex to the initial shape of the blob. This method must be called
         * before adding the body to the world.
         *
         * @param {number} x
         * x coordinate of the vertex to be added
         * @param {number} y
         * y coordinate of the vertex to be added
         */
        vertex(x, y) {
            /* add */ (this.m_vertices.push(fisica.Fisica.screenToWorld$float$float(x, y)) > 0);
        }
        /**
         * Gets the x coordinate of the ith vertex of the initial shape of the blob.
         *
         * @param {number} i
         * index of the vertex to retrieve
         * @return {number} the x coordinate of the vertex to retrieve
         */
        getVertexX(i) {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]).x;
        }
        /**
         * Gets the y coordinate of the ith vertex of the initial shape of the blob.
         *
         * @param {number} i
         * index of the vertex to retrieve
         * @return {number} the y coordinate of the vertex to retrieve
         */
        getVertexY(i) {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]).y;
        }
        setAsCircle$float$float$float$int(x, y, size, vertexCount) {
            /* clear */ (this.m_vertices.length = 0);
            for (let i = 0; i < vertexCount; i++) {
                {
                    let angle = PApplet.map(i, 0, vertexCount, 0, PConstants.TWO_PI);
                    let vx = Math.fround(x + Math.fround(Math.fround(size / 2) * PApplet.sin(angle)));
                    let vy = Math.fround(y + Math.fround(Math.fround(size / 2) * PApplet.cos(angle)));
                    this.vertex(vx, vy);
                }
                ;
            }
        }
        /**
         * Sets the initial shape of the blob to a circle. This method removes all the
         * previous vertices tha may have been added by the use of the
         * {@link #vertex(float,float) vertex}. This method must be called before adding
         * the body to the world.
         *
         * @param {number} x
         * x coordinate of the position of the circle
         * @param {number} y
         * y coordinate of the position of the circle
         * @param {number} size
         * size of the circle
         * @param {number} vertexCount
         * number of vertices of the circle
         */
        setAsCircle(x, y, size, vertexCount) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof size === 'number') || size === null) && ((typeof vertexCount === 'number') || vertexCount === null)) {
                return this.setAsCircle$float$float$float$int(x, y, size, vertexCount);
            }
            else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof size === 'number') || size === null) && vertexCount === undefined) {
                return this.setAsCircle$float$float$float(x, y, size);
            }
            else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && size === undefined && vertexCount === undefined) {
                return this.setAsCircle$float$int(x, y);
            }
            else if (((typeof x === 'number') || x === null) && y === undefined && size === undefined && vertexCount === undefined) {
                return this.setAsCircle$float(x);
            }
            else
                throw new Error('invalid overload');
        }
        setAsCircle$float$float$float(x, y, size) {
            this.setAsCircle$float$float$float$int(x, y, size, 30);
        }
        setAsCircle$float(size) {
            this.setAsCircle$float$float$float$int(0, 0, size, 30);
        }
        setAsCircle$float$int(size, vertexCount) {
            this.setAsCircle$float$float$float$int(0, 0, size, vertexCount);
        }
        /**
         * Returns the size of the circular vertices of the blob. This method must be
         * called before the body is added to the world.
         *
         * @return {number} size of the circular vertices of the blob
         */
        getVertexSize() {
            return fisica.Fisica.worldToScreen$float(this.m_vertexSize);
        }
        /**
         * Sets the size of the circular vertices of the blob. This method must be
         * called before the body is added to the world.
         *
         * @param {number} size
         * size of the circular vertices of the blob
         */
        setVertexSize(size) {
            this.m_vertexSize = fisica.Fisica.screenToWorld$float(size);
        }
        /**
         * Returns vertices of the blob.
         *
         * @return {Array} list of vertex bodies
         */
        getVertexBodies() {
            return this.m_vertexBodies;
        }
        /**
         * Sets the frequency of the springs used to maintain the volume defined by the
         * vertices constant.
         *
         * @param {number} frequency
         * the frequency of the springs of the constant volume joint
         */
        setFrequency(frequency) {
            if (this.m_joint != null) {
                this.m_joint.setFrequency(frequency);
            }
            this.m_frequency = frequency;
        }
        /**
         * Sets the damping of the springs used to maintain the volume defined by the
         * vertices constant.
         *
         * @param {number} damping
         * the damping of the springs of the constant volume joint
         */
        setDamping(damping) {
            if (this.m_joint != null) {
                this.m_joint.setDamping(damping);
            }
            this.m_damping = damping;
        }
        addForce(fx, fy, px, py) {
            if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && ((typeof px === 'number') || px === null) && ((typeof py === 'number') || py === null)) {
                super.addForce(fx, fy, px, py);
            }
            else if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && px === undefined && py === undefined) {
                return this.addForce$float$float(fx, fy);
            }
            else
                throw new Error('invalid overload');
        }
        addForce$float$float(fx, fy) {
            for (let i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].addForce$float$float(fx, fy);
                }
                ;
            }
            this.m_force.add(fisica.Fisica.screenToWorld$float$float(fx, fy));
        }
        addTorque(t) {
            for (let i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].addTorque(t);
                }
                ;
            }
            this.m_torque += t;
        }
        setDensity(d) {
            for (let i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].setDensity(d);
                }
                ;
            }
            this.m_density = d;
        }
        setFriction(d) {
            for (let i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].setFriction(d);
                }
                ;
            }
            this.m_friction = d;
        }
        setRestitution(d) {
            for (let i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].setRestitution(d);
                }
                ;
            }
            this.m_restitution = d;
        }
        setBullet(d) {
            for (let i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].setBullet(d);
                }
                ;
            }
            this.m_bullet = d;
        }
        setNoStroke() {
            super.setNoStroke();
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        }
        setNoFill() {
            super.setNoFill();
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        }
        setFillColor(col) {
            super.setFillColor(col);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        }
        setStrokeColor(col) {
            super.setStrokeColor(col);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        }
        setStrokeWeight(col) {
            super.setStrokeWeight(col);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        }
        setDrawable(val) {
            super.setDrawable(val);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        }
        attachImage(img) {
            super.attachImage(img);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        }
        dettachImage() {
            super.dettachImage();
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        }
    }
    fisica.FBlob = FBlob;
    FBlob["__class"] = "fisica.FBlob";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs a rectangular body that can be added to a world.
     *
     * @param {number} width  the width of the rectangle
     * @param {number} height  the height of the rectangle
     * @class
     * @extends fisica.FBody
     */
    class FBox extends fisica.FBody {
        constructor(width, height) {
            super();
            if (this.m_height === undefined)
                this.m_height = 0;
            if (this.m_width === undefined)
                this.m_width = 0;
            this.m_height = fisica.Fisica.screenToWorld$float(height);
            this.m_width = fisica.Fisica.screenToWorld$float(width);
        }
        getShapeDef() {
            let pd = new org.jbox2d.collision.shapes.PolygonDef();
            pd.setAsBox(Math.fround(this.m_width / 2.0), Math.fround(this.m_height / 2.0));
            pd.density = this.m_density;
            pd.friction = this.m_friction;
            pd.restitution = this.m_restitution;
            pd.isSensor = this.m_sensor;
            return pd;
        }
        getTransformedShapeDef() {
            let pd = this.getShapeDef();
            let xf = new org.jbox2d.common.XForm();
            xf.R.set(-this.m_angle);
            xf.position = org.jbox2d.common.Mat22.mul(xf.R, this.m_position.negate());
            for (let i = 0; i < pd.vertices.length; i++) {
                {
                    let ver = pd.vertices[i];
                    org.jbox2d.common.XForm.mulTransToOut(xf, ver, ver);
                }
                ;
            }
            return pd;
        }
        /**
         * Returns the height of the rectangle.
         *
         * @usage Bodies
         * @see #getWidth()
         * @return {number} the height of the rectangle
         */
        getHeight() {
            return fisica.Fisica.worldToScreen$float(this.m_height);
        }
        /**
         * Returns the width of the rectangle.
         *
         * @usage Bodies
         * @see #getHeight()
         * @return {number} the width of the rectangle
         */
        getWidth() {
            return fisica.Fisica.worldToScreen$float(this.m_width);
        }
        /**
         * Sets the height of the rectangle.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @see #getWidth()
         * @return {void} the height of the rectangle
         * @param {number} height
         */
        setHeight(height) {
            this.m_height = fisica.Fisica.screenToWorld$float(height);
            this.recreateInWorld();
        }
        /**
         * Sets the width of the rectangle.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @see #getWidth()
         * @return {void} the width of the rectangle
         * @param {number} width
         */
        setWidth(width) {
            this.m_width = fisica.Fisica.screenToWorld$float(width);
            this.recreateInWorld();
        }
        draw(applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                applet.rect(0, 0, this.getWidth(), this.getHeight());
            }
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            applet.rect(0, 0, this.getWidth(), this.getHeight());
            this.postDrawDebug(applet);
        }
    }
    fisica.FBox = FBox;
    FBox["__class"] = "fisica.FBox";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs a circular body that can be added to a world.
     *
     * @param {number} size  the size of the circle
     * @class
     * @extends fisica.FBody
     */
    class FCircle extends fisica.FBody {
        constructor(size) {
            super();
            if (this.m_size === undefined)
                this.m_size = 0;
            this.m_size = fisica.Fisica.screenToWorld$float(size);
        }
        getShapeDef() {
            let pd = new org.jbox2d.collision.shapes.CircleDef();
            pd.radius = Math.fround(this.m_size / 2.0);
            pd.density = this.m_density;
            pd.friction = this.m_friction;
            pd.restitution = this.m_restitution;
            pd.isSensor = this.m_sensor;
            return pd;
        }
        getTransformedShapeDef() {
            let pd = this.getShapeDef();
            pd.localPosition.set(this.m_position);
            return pd;
        }
        /**
         * Returns the size of the circle.
         *
         * @usage Bodies
         * @return {number} the size of the circle
         */
        getSize() {
            return fisica.Fisica.worldToScreen$float(this.m_size);
        }
        /**
         * Sets the size of the circle.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @param {number} size the size of the circle
         */
        setSize(size) {
            this.m_size = fisica.Fisica.screenToWorld$float(size);
            this.recreateInWorld();
        }
        draw(applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                applet.ellipse(0, 0, this.getSize(), this.getSize());
            }
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            applet.ellipse(0, 0, this.getSize(), this.getSize());
            applet.line(0, 0, Math.fround(this.getSize() / 2), 0);
            this.postDrawDebug(applet);
        }
    }
    fisica.FCircle = FCircle;
    FCircle["__class"] = "fisica.FCircle";
})(fisica || (fisica = {}));
(function (fisica) {
    class FCompound extends fisica.FBody {
        constructor() {
            super();
            if (this.m_shapes === undefined)
                this.m_shapes = null;
            this.m_shapes = ([]);
        }
        getShapeDefs() {
            let result = ([]);
            for (let i = 0; i < this.m_shapes.length; i++) {
                {
                    let sd = (this.m_shapes[i].getTransformedShapeDef());
                    sd = this.m_shapes[i].processShapeDef(sd);
                    /* add */ (result.push(sd) > 0);
                }
                ;
            }
            return result;
        }
        getBodies() {
            return this.m_shapes;
        }
        addBody(body) {
            /* add */ (this.m_shapes.push(body) > 0);
        }
        draw(applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                for (let i = 0; i < this.m_shapes.length; i++) {
                    {
                        this.m_shapes[i].draw(applet);
                    }
                    ;
                }
            }
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            for (let i = 0; i < this.m_shapes.length; i++) {
                {
                    this.m_shapes[i].drawDebug(applet);
                }
                ;
            }
            this.postDrawDebug(applet);
        }
    }
    fisica.FCompound = FCompound;
    FCompound["__class"] = "fisica.FCompound";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs a line body that can be added to a world.
     *
     * @param {number} x1  horizontal position of the first point of the line
     * @param {number} y1  vertical position of the first point of the line
     * @param {number} x2  horizontal position of the second point of the line
     * @param {number} y2  vertical position of the second point of the line
     * @class
     * @extends fisica.FBody
     */
    class FLine extends fisica.FBody {
        constructor(x1, y1, x2, y2) {
            super();
            if (this.m_start === undefined)
                this.m_start = null;
            if (this.m_end === undefined)
                this.m_end = null;
            this.m_start = fisica.Fisica.screenToWorld$float$float(x1, y1);
            this.m_end = fisica.Fisica.screenToWorld$float$float(x2, y2);
        }
        getShapeDef() {
            let pd = new org.jbox2d.collision.shapes.EdgeChainDef();
            pd.addVertex(this.m_start);
            pd.addVertex(this.m_end);
            pd.setIsLoop(false);
            pd.density = this.m_density;
            pd.friction = this.m_friction;
            pd.restitution = this.m_restitution;
            pd.isSensor = this.m_sensor;
            return pd;
        }
        /**
         * Sets the start point of the line.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @param {number} x  horizontal position of the first point of the line
         * @param {number} y  vertical position of the first point of the line
         */
        setStart(x, y) {
            this.m_start = fisica.Fisica.screenToWorld$float$float(x, y);
            this.recreateInWorld();
        }
        /**
         * Sets the end point of the line.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @param {number} x  horizontal position of the first point of the line
         * @param {number} y  vertical position of the first point of the line
         */
        setEnd(x, y) {
            this.m_end = fisica.Fisica.screenToWorld$float$float(x, y);
            this.recreateInWorld();
        }
        draw(applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                let tempStart = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_start);
                let tempEnd = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_end);
                applet.line(tempStart.x, tempStart.y, tempEnd.x, tempEnd.y);
            }
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            let tempStart = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_start);
            let tempEnd = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_end);
            applet.line(tempStart.x, tempStart.y, tempEnd.x, tempEnd.y);
            this.postDrawDebug(applet);
        }
    }
    fisica.FLine = FLine;
    FLine["__class"] = "fisica.FLine";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs a polygonal body that can be added to a world.  It creates an empty polygon, before adding the blob to the world use {@link #vertex(float,float) vertex} to define the shape of the polygon.
     * @class
     * @extends fisica.FBody
     */
    class FPoly extends fisica.FBody {
        constructor() {
            super();
            if (this.m_polygon === undefined)
                this.m_polygon = null;
            if (this.m_closed === undefined)
                this.m_closed = false;
            if (this.m_vertices === undefined)
                this.m_vertices = null;
            this.m_closed = false;
            this.m_vertices = ([]);
        }
        /**
         * Adds vertices to the shape of the poly.  This method must called before adding the body to the world.
         *
         * @param {number} x  x coordinate of the vertex to be added
         * @param {number} y  y coordinate of the vertex to be added
         */
        vertex(x, y) {
            /* add */ (this.m_vertices.push(fisica.Fisica.screenToWorld$float$float(x, y)) > 0);
        }
        processBody(bd, sd) {
            org.jbox2d.util.nonconvex.Polygon.decomposeConvexAndAddTo(this.m_polygon, bd, sd);
        }
        getShapeDef() {
            let pd = new org.jbox2d.collision.shapes.PolygonDef();
            /* add */ (this.m_vertices.push(new org.jbox2d.common.Vec2(this.m_vertices[this.m_vertices.length - 1])) > 0);
            this.m_closed = true;
            let vertices = (s => { let a = []; while (s-- > 0)
                a.push(null); return a; })(/* size */ this.m_vertices.length);
            /* toArray */ ((a1, a2) => { if (a1.length >= a2.length) {
                a1.length = 0;
                a1.push.apply(a1, a2);
                return a1;
            }
            else {
                return a2.slice(0);
            } })(vertices, this.m_vertices);
            this.m_polygon = new org.jbox2d.util.nonconvex.Polygon(vertices);
            pd.density = this.m_density;
            pd.friction = this.m_friction;
            pd.restitution = this.m_restitution;
            pd.isSensor = this.m_sensor;
            return pd;
        }
        getTransformedShapeDef() {
            let pd = this.getShapeDef();
            let xf = new org.jbox2d.common.XForm();
            xf.R.set(-this.m_angle);
            xf.position = org.jbox2d.common.Mat22.mul(xf.R, this.m_position.negate());
            for (let i = 0; i < pd.vertices.length; i++) {
                {
                    let ver = pd.vertices[i];
                    org.jbox2d.common.XForm.mulTransToOut(xf, ver, ver);
                }
                ;
            }
            return pd;
        }
        draw(applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                applet.beginShape();
                for (let i = 0; i < this.m_vertices.length; i++) {
                    {
                        let v = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]);
                        applet.vertex(v.x, v.y);
                    }
                    ;
                }
                if (this.m_closed) {
                    applet.endShape(PConstants.CLOSE);
                }
                else {
                    applet.endShape();
                }
            }
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            let b = this.getBox2dBody();
            if (b != null) {
                applet.pushStyle();
                applet.stroke(120, 100);
                applet.fill(120, 30);
                let ss = b.getShapeList();
                while ((ss != null)) {
                    {
                        let ps = ss;
                        let vecs = ps.getVertices();
                        applet.beginShape();
                        for (let j = 0; j < ps.getVertexCount(); j++) {
                            {
                                let v = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(vecs[j]);
                                applet.vertex(v.x, v.y);
                            }
                            ;
                        }
                        applet.endShape(PConstants.CLOSE);
                        let c = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(ps.getCentroid());
                        applet.ellipse(c.x, c.y, 2, 2);
                        ss = ss.getNext();
                    }
                }
                ;
                applet.popStyle();
            }
            applet.beginShape();
            for (let i = 0; i < this.m_vertices.length; i++) {
                {
                    let v = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]);
                    applet.vertex(v.x, v.y);
                }
                ;
            }
            if (this.m_closed) {
                applet.endShape(PConstants.CLOSE);
            }
            else {
                applet.endShape();
            }
            this.postDrawDebug(applet);
        }
    }
    fisica.FPoly = FPoly;
    FPoly["__class"] = "fisica.FPoly";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs an constant volume joint.  It creates an empty joint, before adding the joint to the world use {@link #addBody(FBody) addBody} to add bodies to the joint and to define the initial and target volume of the joint.
     * @class
     * @extends fisica.FJoint
     */
    class FConstantVolumeJoint extends fisica.FJoint {
        constructor() {
            super();
            this.m_damping = 0.0;
            this.m_frequency = 0.0;
            if (this.m_bodies === undefined)
                this.m_bodies = null;
            this.m_bodies = ([]);
        }
        getJointDef(world) {
            let md = new org.jbox2d.dynamics.joints.ConstantVolumeJointDef();
            md.frequencyHz = this.m_frequency;
            md.dampingRatio = this.m_damping;
            for (let i = 0; i < this.m_bodies.length; i++) {
                {
                    let b = this.m_bodies[i].m_body;
                    if (b != null) {
                        md.addBody(b);
                    }
                }
                ;
            }
            return md;
        }
        /**
         * Adds a body to the joint.  This method must be called before adding the joint to the world.
         *
         * @param {fisica.FBody} b  body to be added
         */
        addBody(b) {
            /* add */ (this.m_bodies.push(b) > 0);
        }
        /**
         * Return the group of bodies that are connected by this joint.
         *
         * @return   {Array} list of bodies (ArrayList of FBody) connected by the joint
         */
        getBodies() {
            return this.m_bodies;
        }
        /**
         * Sets the damping of the springs used to maintain the volume defined by the vertices constant.  This method must be called before adding the joint to the world.
         *
         * @param {number} damping  the damping of the springs of the constant volume joint
         */
        setDamping(damping) {
            this.m_damping = damping;
        }
        /**
         * Sets the frequency of the springs used to maintain the volume defined by the vertices constant.  This method must be called before adding the joint to the world.
         *
         * @param {number} frequency  the frequency of the springs of the constant volume joint
         */
        setFrequency(frequency) {
            this.m_frequency = frequency;
        }
        getCentroid() {
            let centroid = new PVector(0, 0);
            let signedArea = 0.0;
            let x0 = 0.0;
            let y0 = 0.0;
            let x1 = 0.0;
            let y1 = 0.0;
            let a = 0.0;
            let i;
            for (i = 0; i < this.m_bodies.length - 1; ++i) {
                {
                    x0 = this.m_bodies[i].getX();
                    y0 = this.m_bodies[i].getY();
                    x1 = this.m_bodies[i + 1].getX();
                    y1 = this.m_bodies[i + 1].getY();
                    a = Math.fround(Math.fround(x0 * y1) - Math.fround(x1 * y0));
                    signedArea += a;
                    centroid.x += Math.fround((Math.fround(x0 + x1)) * a);
                    centroid.y += Math.fround((Math.fround(y0 + y1)) * a);
                }
                ;
            }
            x0 = this.m_bodies[i].getX();
            y0 = this.m_bodies[i].getY();
            x1 = this.m_bodies[0].getX();
            y1 = this.m_bodies[0].getY();
            a = Math.fround(Math.fround(x0 * y1) - Math.fround(x1 * y0));
            signedArea += a;
            centroid.x += Math.fround((Math.fround(x0 + x1)) * a);
            centroid.y += Math.fround((Math.fround(y0 + y1)) * a);
            signedArea *= 0.5;
            centroid.x /= (6.0 * signedArea);
            centroid.y /= (6.0 * signedArea);
            return centroid;
        }
        draw(applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                applet.pushMatrix();
                let c = this.getCentroid();
                applet.translate(c.x, c.y);
                this.drawImage(applet);
                applet.popMatrix();
            }
            else {
                if (this.m_bodies.length > 0) {
                    applet.beginShape();
                    for (let i = 0; i < this.m_bodies.length; i++) {
                        {
                            applet.vertex(this.m_bodies[i].getX(), this.m_bodies[i].getY());
                        }
                        ;
                    }
                    applet.endShape(PConstants.CLOSE);
                }
            }
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            if (this.m_bodies.length > 0) {
                applet.beginShape();
                for (let i = 0; i < this.m_bodies.length; i++) {
                    {
                        applet.vertex(this.m_bodies[i].getX(), this.m_bodies[i].getY());
                    }
                    ;
                }
                applet.endShape(PConstants.CLOSE);
                for (let i = 0; i < this.m_bodies.length; i++) {
                    {
                        applet.ellipse(this.m_bodies[i].getX(), this.m_bodies[i].getY(), 5, 5);
                    }
                    ;
                }
            }
            this.postDrawDebug(applet);
        }
    }
    fisica.FConstantVolumeJoint = FConstantVolumeJoint;
    FConstantVolumeJoint["__class"] = "fisica.FConstantVolumeJoint";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Construct a distance joint between two bodies.  The constructor automatically sets the anchors of the joint to the centers of each body, and the length of the joint to the current distance between the bodies.
     *
     * @param {fisica.FBody} body1  first body of the joint
     * @param {fisica.FBody} body2  second body of the joint
     * @class
     * @extends fisica.FJoint
     */
    class FDistanceJoint extends fisica.FJoint {
        constructor(body1, body2) {
            super();
            this.m_damping = 0.3;
            this.m_frequency = 10.0;
            if (this.m_body1 === undefined)
                this.m_body1 = null;
            if (this.m_body2 === undefined)
                this.m_body2 = null;
            if (this.m_length === undefined)
                this.m_length = 0;
            if (this.m_anchor1 === undefined)
                this.m_anchor1 = null;
            if (this.m_anchor2 === undefined)
                this.m_anchor2 = null;
            this.m_body1 = body1;
            this.m_body2 = body2;
            this.m_anchor1 = new org.jbox2d.common.Vec2(0.0, 0.0);
            this.m_anchor2 = new org.jbox2d.common.Vec2(0.0, 0.0);
            this.calculateLength();
        }
        getJointDef(world) {
            let md = new org.jbox2d.dynamics.joints.DistanceJointDef();
            if (this.m_body1 == null || this.m_body1.m_body == null || this.m_body2 == null || this.m_body2.m_body == null) {
                return null;
            }
            md.body1 = this.m_body1.m_body;
            md.body2 = this.m_body2.m_body;
            md.localAnchor1 = ((o) => { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                let clone = Object.create(o);
                for (let p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(this.m_anchor1);
            md.localAnchor2 = ((o) => { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                let clone = Object.create(o);
                for (let p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(this.m_anchor2);
            md.length = fisica.Fisica.screenToWorld$float(this.m_length);
            md.frequencyHz = this.m_frequency;
            md.dampingRatio = this.m_damping;
            this.m_body1.m_body.wakeUp();
            this.m_body2.m_body.wakeUp();
            return md;
        }
        /**
         * Sets the damping of the spring used to maintain the distance between the bodies constant.
         *
         * @param {number} damping  the damping of the spring
         */
        setDamping(damping) {
            if (this.m_joint != null) {
                this.m_joint.m_dampingRatio = damping;
            }
            this.m_damping = damping;
        }
        /**
         * Sets the frequency of the spring used to maintain the distance between the bodies constant.
         *
         * @param {number} frequency  the frequency of the spring
         */
        setFrequency(frequency) {
            if (this.m_joint != null) {
                this.m_joint.m_frequencyHz = frequency;
            }
            this.m_frequency = frequency;
        }
        /**
         * Sets the length of the joint to the current distance between the bodies.
         */
        calculateLength() {
            let lengthX = (Math.fround((Math.fround(this.m_body1.getX() + this.getAnchor1X())) - (Math.fround(this.m_body2.getX() + this.getAnchor2X()))));
            let lengthY = (Math.fround((Math.fround(this.m_body1.getY() + this.getAnchor1Y())) - (Math.fround(this.m_body2.getY() + this.getAnchor2Y()))));
            this.setLength(Math.fround(Math.sqrt(Math.fround(Math.fround(lengthX * lengthX) + Math.fround(lengthY * lengthY)))));
        }
        /**
         * Sets the target distance for the joint.  This is the distance that the joint will try to maintain between the two bodies.  If you want to use as length the current distance between the two bodies, use the method {@link #calculateLength() calculateLength}.
         *
         * @param {number} length  the length of the joint
         */
        setLength(length) {
            if (this.m_joint != null) {
                this.m_joint.m_length = fisica.Fisica.screenToWorld$float(length);
            }
            this.m_length = length;
        }
        /**
         * Sets the position of the anchor of the second end of the joint on the second body.  This position must be given relative to the center of the second body.  The anchor point is the point used to calculate the distance and to apply forces in order to move the body.
         *
         * @param {number} x  the horizontal coordinate of the second anchor relative to the center of the second body
         * @param {number} y  the vertical coordinate of the second anchor relative to the center of the second body
         */
        setAnchor2(x, y) {
            if (this.m_joint != null) {
                this.m_joint.getAnchor2().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_anchor2 = fisica.Fisica.screenToWorld$float$float(x, y);
        }
        /**
         * Sets the position of the anchor of the first end of the joint on the first body.  This position must be given relative to the center of the first body.  The anchor point is the point used to calculate the distance and to apply forces in order to move the body.
         *
         * @param {number} x  the horizontal coordinate of the first anchor relative to the center of the first body
         * @param {number} y  the vertical coordinate of the first anchor relative to the center of the first body
         */
        setAnchor1(x, y) {
            if (this.m_joint != null) {
                this.m_joint.getAnchor1().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_anchor1 = fisica.Fisica.screenToWorld$float$float(x, y);
        }
        /**
         * Get the horizontal coordinate of the first anchor point on the first body.  This position is given relative to the center of the first body.
         *
         * @return  {number} the horizontal coordinate of the first anchor relative to the center of the first body
         */
        getAnchor1X() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor1()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor1.x);
        }
        /**
         * Get the vertical coordinate of the first anchor point on the first body.  This position is given relative to the center of the first body.
         *
         * @return  {number} the vertical coordinate of the first anchor relative to the center of the first body
         */
        getAnchor1Y() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor1()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor1.y);
        }
        /**
         * Get the horizontal coordinate of the second anchor point on the second body.  This position is given relative to the center of the second body.
         *
         * @return  {number} the horizontal coordinate of the second anchor relative to the center of the second body
         */
        getAnchor2X() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor2.x);
        }
        /**
         * Get the vertical coordinate of the second anchor point on the second body.  This position is given relative to the center of the second body.
         *
         * @return  {number} the vertical coordinate of the second anchor relative to the center of the second body
         */
        getAnchor2Y() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor2.y);
        }
        draw(applet) {
            this.preDraw(applet);
            applet.ellipse(this.getAnchor1X(), this.getAnchor1Y(), 5, 5);
            applet.line(this.getAnchor1X(), this.getAnchor1Y(), this.getAnchor2X(), this.getAnchor2Y());
            applet.ellipse(this.getAnchor2X(), this.getAnchor2Y(), 5, 5);
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            let numSpins = ((((Math.fround((Math.fround(this.m_length - 20)) / 6)) | 0) / 2 | 0)) * 2 + 1;
            if (numSpins <= 0) {
                applet.line(this.getAnchor1X(), this.getAnchor1Y(), this.getAnchor2X(), this.getAnchor2Y());
            }
            else {
                applet.pushMatrix();
                applet.translate(this.getAnchor1X(), this.getAnchor1Y());
                let ang = PApplet.atan2(Math.fround(this.getAnchor2Y() - this.getAnchor1Y()), Math.fround(this.getAnchor2X() - this.getAnchor1X()));
                let dist = PApplet.dist(this.getAnchor1X(), this.getAnchor1Y(), this.getAnchor2X(), this.getAnchor2Y());
                applet.rotate(ang);
                if (this.m_length > 0) {
                    applet.rect(Math.fround(dist / 2), 0, this.m_length, 12);
                }
                applet.pushStyle();
                applet.noFill();
                applet.beginShape();
                applet.vertex(0, 0);
                applet.vertex(10, 0);
                let x;
                let y;
                for (let i = 0; i < numSpins; i++) {
                    {
                        x = PApplet.map(i + 1, 0, numSpins + 1, 10, Math.fround(dist - 10));
                        y = ((i % 2) * 2 - 1) * 4;
                        applet.vertex(x, y);
                    }
                    ;
                }
                x = PApplet.map(numSpins + 1, 0, numSpins + 1, 10, Math.fround(dist - 10));
                applet.vertex(x, 0);
                applet.vertex(dist, 0);
                applet.endShape();
                applet.popStyle();
                applet.popMatrix();
            }
            applet.pushStyle();
            applet.noStroke();
            applet.ellipse(this.getAnchor1X(), this.getAnchor1Y(), 5, 5);
            applet.ellipse(this.getAnchor2X(), this.getAnchor2Y(), 5, 5);
            applet.popStyle();
            this.postDrawDebug(applet);
        }
    }
    fisica.FDistanceJoint = FDistanceJoint;
    FDistanceJoint["__class"] = "fisica.FDistanceJoint";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Construct a gear joint between two joints.
     *
     * @param {fisica.FJoint} joint1  first joint of the gear
     * @param {fisica.FJoint} joint2  second joint of the gear
     * @class
     * @extends fisica.FJoint
     */
    class FGearJoint extends fisica.FJoint {
        constructor(joint1, joint2) {
            super();
            this.m_ratio = 1.0;
            this.m_worldRatio = 1.0;
            if (this.m_joint1 === undefined)
                this.m_joint1 = null;
            if (this.m_joint2 === undefined)
                this.m_joint2 = null;
            this.m_joint1 = joint1;
            this.m_joint2 = joint2;
            this.updateRatio();
        }
        getJointDef(world) {
            let md = new org.jbox2d.dynamics.joints.GearJointDef();
            md.joint1 = this.m_joint1.m_joint;
            md.joint2 = this.m_joint2.m_joint;
            md.ratio = this.m_worldRatio;
            return md;
        }
        updateRatio() {
            this.m_worldRatio = this.m_ratio;
            if (this.m_joint1.m_joint.getType() === org.jbox2d.dynamics.joints.JointType.PRISMATIC_JOINT) {
                this.m_worldRatio = fisica.Fisica.screenToWorld$float(this.m_worldRatio);
            }
            if (this.m_joint2.m_joint.getType() === org.jbox2d.dynamics.joints.JointType.PRISMATIC_JOINT) {
                this.m_worldRatio = Math.fround(1.0 / fisica.Fisica.screenToWorld$float(Math.fround(1.0 / this.m_worldRatio)));
            }
            if (this.m_joint != null) {
                this.m_joint.m_ratio = this.m_worldRatio;
            }
        }
        /**
         * Sets the ratio of movement transfer from one joint to the other of the gear.
         *
         * @param {number} ratio  the ratio of movement that is transfered between the first and the second joints of the gear
         */
        setRatio(ratio) {
            this.m_ratio = ratio;
            this.updateRatio();
        }
        draw(applet) {
        }
    }
    fisica.FGearJoint = FGearJoint;
    FGearJoint["__class"] = "fisica.FGearJoint";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Construct a mouse joint between a body and a target.  The constructor automatically sets the anchors of the joint to the center of the body.
     *
     * @param {fisica.FBody} body  the body to be grabbed by the joint
     * @param {number} x  horizontal coordinate of the initial target of the joint
     * @param {number} y  vertical coordinate of the initial target of the joint
     * @class
     * @extends fisica.FJoint
     */
    class FMouseJoint extends fisica.FJoint {
        constructor(body, x, y) {
            super();
            this.m_damping = 0.9;
            this.m_frequency = 20.0;
            if (this.m_fbody === undefined)
                this.m_fbody = null;
            if (this.m_anchor === undefined)
                this.m_anchor = null;
            if (this.m_target === undefined)
                this.m_target = null;
            this.m_fbody = body;
            this.m_target = fisica.Fisica.screenToWorld$float$float(x, y);
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
        }
        getJointDef(world) {
            let body = this.m_fbody.m_body;
            let md = new org.jbox2d.dynamics.joints.MouseJointDef();
            md.body1 = this.m_world.getGroundBody();
            md.body2 = body;
            md.target.set(this.m_anchor);
            md.maxForce = Math.fround(10000.0 * body.m_mass);
            md.frequencyHz = this.m_frequency;
            md.dampingRatio = this.m_damping;
            body.wakeUp();
            return md;
        }
        /**
         * Sets the damping of the spring used to maintain the body and the target together.  This property must be set before adding the joint to the world.
         *
         * @param {number} damping  the damping of the spring
         */
        setDamping(damping) {
            this.m_damping = damping;
        }
        /**
         * Sets the frequency of the spring used to maintain the body and the target together.  This property must be set before adding the joint to the world.
         *
         * @param {number} frequency  the frequency of the spring
         */
        setFrequency(frequency) {
            this.m_frequency = frequency;
        }
        /**
         * Sets the target position of the joint.  By setting this property everytime the mouse is used we are able to make the body of this joint follow mouse.
         *
         * @param {number} x  horizontal coordinate of the target of the joint
         * @param {number} y  vertical coordinate of the target of the joint
         */
        setTarget(x, y) {
            if (this.m_joint != null) {
                this.m_joint.setTarget(fisica.Fisica.screenToWorld$float$float(x, y));
            }
            this.m_target = fisica.Fisica.screenToWorld$float$float(x, y);
        }
        /**
         * Returns the horizontal target position of the joint.
         *
         * @return  {number} horizontal coordinate of the target of the joint
         */
        getTargetX() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.m_target).x;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_target).x;
        }
        /**
         * Returns the vertical target position of the joint.
         *
         * @return  {number} vertical coordinate of the target of the joint
         */
        getTargetY() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.m_target).y;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_target).y;
        }
        /**
         * Sets the body grabbed by this joint and the target position.
         *
         * @param {fisica.FBody} body  the body to be grabbed by the joint
         * @param {number} x  horizontal coordinate of the target of the joint
         * @param {number} y  vertical coordinate of the target of the joint
         */
        setGrabbedBodyAndTarget(body, x, y) {
            if (this.m_joint != null) {
                this.m_joint.m_body2 = body.m_body;
                this.m_joint.m_target.set(fisica.Fisica.screenToWorld$float$float(x, y));
                this.m_joint.getAnchor2().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_fbody = body;
            this.m_target = fisica.Fisica.screenToWorld$float$float(x, y);
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
        }
        /**
         * Releases the body grabbed by this joint.
         */
        releaseGrabbedBody() {
            if (this.m_joint != null) {
                this.m_joint.m_body2 = null;
                this.m_joint.m_target.set(0.0, 0.0);
            }
            this.m_fbody = null;
            this.m_target = null;
        }
        /**
         * Returns the body grabbed by this joint.
         *
         * @return {fisica.FBody} the body grabbed by this joint
         */
        getGrabbedBody() {
            if (this.m_joint != null) {
                return this.m_joint.m_body2.getUserData();
            }
            return this.m_fbody;
        }
        /**
         * Sets the anchor position at which the joint grabs the body.  The anchor point is the point used to apply forces in order to move the body.
         *
         * @param {number} x  the horizontal coordinate of the anchor relative to the center of the body
         * @param {number} y  the vertical coordinate of the anchor relative to the center of the body
         */
        setAnchor(x, y) {
            if (this.m_joint != null) {
                this.m_joint.getAnchor2().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
        }
        /**
         * Get the horizontal coordinate of the anchor point on the body.  This position is given relative to the center of the body.
         *
         * @return  {number} the horizontal coordinate of the anchor relative to the center of the first body
         */
        getAnchorX() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.x);
        }
        /**
         * Get the vertical coordinate of the anchor point on the body.  This position is given relative to the center of the body.
         *
         * @return  {number} the vertical coordinate of the anchor relative to the center of the first body
         */
        getAnchorY() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.y);
        }
        draw(applet) {
            this.preDraw(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getTargetX(), this.getTargetY());
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getTargetX(), this.getTargetY());
            applet.ellipse(this.getAnchorX(), this.getAnchorY(), 5, 5);
            applet.ellipse(this.getTargetX(), this.getTargetY(), 10, 10);
            this.postDrawDebug(applet);
        }
    }
    fisica.FMouseJoint = FMouseJoint;
    FMouseJoint["__class"] = "fisica.FMouseJoint";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Construct a prismatic joint between two bodies.  The constructor automatically sets the anchor of the joint to the center of the second body.
     *
     * @param {fisica.FBody} body1  first body of the joint
     * @param {fisica.FBody} body2  second body of the joint
     * @class
     * @extends fisica.FJoint
     */
    class FPrismaticJoint extends fisica.FJoint {
        constructor(body1, body2) {
            super();
            this.m_localAxis1 = new org.jbox2d.common.Vec2(0, 1);
            /**
             * The local anchor point relative to body1's origin.
             */
            this.m_localAnchor1 = new org.jbox2d.common.Vec2(0.0, 0.0);
            /**
             * The local anchor point relative to body2's origin.
             */
            this.m_localAnchor2 = new org.jbox2d.common.Vec2(0.0, 0.0);
            /**
             * The body2 angle minus body1 angle in the reference state (radians).
             */
            this.m_referenceAngle = 0.0;
            /**
             * A flag to enable joint limits.
             */
            this.m_enableLimit = false;
            /**
             * The lower translation for the joint limit (world coords).
             */
            this.m_lowerTranslation = 0.0;
            /**
             * The upper translation for the joint limit (world coords).
             */
            this.m_upperTranslation = 0.0;
            /**
             * A flag to enable the joint motor.
             */
            this.m_enableMotor = false;
            /**
             * The desired motor speed. Usually in radians per second.
             */
            this.m_motorSpeed = 0.0;
            /**
             * The maximum motor torque used to achieve the desired motor speed.
             * Usually in N-m.
             */
            this.m_maxMotorTorque = 0.0;
            if (this.m_body1 === undefined)
                this.m_body1 = null;
            if (this.m_body2 === undefined)
                this.m_body2 = null;
            if (this.m_anchor === undefined)
                this.m_anchor = null;
            if (this.m_axis === undefined)
                this.m_axis = null;
            if (this.m_force === undefined)
                this.m_force = 0;
            if (this.m_torque === undefined)
                this.m_torque = 0;
            if (this.m_motorForce === undefined)
                this.m_motorForce = 0;
            if (this.m_limitForce === undefined)
                this.m_limitForce = 0;
            if (this.m_limitPositionImpulse === undefined)
                this.m_limitPositionImpulse = 0;
            if (this.m_maxMotorForce === undefined)
                this.m_maxMotorForce = 0;
            this.m_body1 = body1;
            this.m_body2 = body2;
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(body2.getX(), body2.getY());
            this.updateLocalAnchors();
            this.m_axis = new org.jbox2d.common.Vec2(0.0, 1.0);
            this.updateLocalAxis();
            this.m_referenceAngle = Math.fround(this.m_body2.getRotation() - this.m_body1.getRotation());
        }
        updateLocalAnchors() {
            if (this.m_body1.m_body != null) {
                this.m_body1.m_body.getLocalPointToOut(this.m_anchor, this.m_localAnchor1);
            }
            if (this.m_body2.m_body != null) {
                this.m_body2.m_body.getLocalPointToOut(this.m_anchor, this.m_localAnchor2);
            }
        }
        updateLocalAxis() {
            if (this.m_body1.m_body != null) {
                let axis = new org.jbox2d.common.Vec2(this.m_axis);
                this.m_body1.m_body.getLocalVectorToOut(axis, this.m_localAxis1);
            }
        }
        getJointDef(world) {
            let md = new org.jbox2d.dynamics.joints.PrismaticJointDef();
            md.body1 = this.m_body1.m_body;
            md.body2 = this.m_body2.m_body;
            md.localAnchor1 = this.m_localAnchor1;
            md.localAnchor2 = this.m_localAnchor2;
            md.referenceAngle = this.m_referenceAngle;
            md.lowerTranslation = this.m_lowerTranslation;
            md.upperTranslation = this.m_upperTranslation;
            md.enableMotor = this.m_enableMotor;
            md.enableLimit = this.m_enableLimit;
            md.motorSpeed = this.m_motorSpeed;
            md.maxMotorForce = this.m_maxMotorForce;
            this.updateLocalAnchors();
            md.localAxis1 = this.m_localAxis1;
            this.m_body1.m_body.wakeUp();
            this.m_body2.m_body.wakeUp();
            return md;
        }
        /**
         * Sets the axis of movement of the joint.  This is only axis alog which the bodies can translate with relation to each other.  The axis is given global coordinates, relative to the center of the canvas.  This property must be set before adding the joint to the world.
         *
         * @param {number} x  the horizontal component of the axis in global coordinates, relative to the center of the canvas
         * @param {number} y  the vertical coordinate of the axis in global coordinates, relative to the center of the canvas
         */
        setAxis(x, y) {
            let d = PApplet.dist(0, 0, x, y);
            this.m_axis.set(Math.fround(x / d), Math.fround(y / d));
            this.updateLocalAxis();
        }
        /**
         * Sets the position of the anchor of the joint.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @param {number} x  the horizontal coordinate of the anchor in global coordinates, relative to the center of the canvas
         * @param {number} y  the vertical coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        setAnchor(x, y) {
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
            this.updateLocalAnchors();
        }
        /**
         * Get the horizontal coordinate of the anchor of the joint.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @return  {number} the horizontal coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        getAnchorX() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor1()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.x);
        }
        /**
         * Get the vertical coordinate of the anchor of the joint.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @return  {number} the vertical coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        getAnchorY() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor1()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.y);
        }
        /**
         * Set the lowest translation allowed.  This property only has effect if the {@code enableLimit} has been set to {@code true} using {@link #setEnableLimit(boolean)}.
         *
         * @param {number} translation  lowest translation position in pixels
         */
        setLowerTranslation(translation) {
            if (this.m_joint != null) {
                this.m_joint.m_lowerTranslation = fisica.Fisica.screenToWorld$float(translation);
            }
            this.m_lowerTranslation = fisica.Fisica.screenToWorld$float(translation);
        }
        /**
         * Set the highest translation allowed.  This property only has effect if the {@code enableLimit} has been set to {@code true} using {@link #setEnableLimit(boolean)}.
         *
         * @param {number} translation  highest translation position in pixels
         */
        setUpperTranslation(translation) {
            if (this.m_joint != null) {
                this.m_joint.m_upperTranslation = fisica.Fisica.screenToWorld$float(translation);
            }
            this.m_upperTranslation = fisica.Fisica.screenToWorld$float(translation);
        }
        /**
         * Set limits to the allowed translation of one body respect to the other.  If set to {@code true} the limits imposed using {@link #setLowerTranslation(float) setLowerTranslation} and {@link #setUpperTranslation(float) setLowerTranslation} are enforced.
         *
         * @param {boolean} value  if {@code true} the bodies will be able to translate along the axis only between certain limits
         */
        setEnableLimit(value) {
            if (this.m_joint != null) {
                this.m_joint.m_enableLimit = value;
            }
            this.m_enableLimit = value;
        }
        draw(applet) {
            this.preDraw(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody1().getX(), this.getBody1().getY());
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody2().getX(), this.getBody2().getY());
            applet.rect(this.getAnchorX(), this.getAnchorY(), 10, 10);
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            let lineHalfLength = 150;
            applet.pushStyle();
            applet.noFill();
            applet.stroke(80, 50);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody1().getX(), this.getBody1().getY());
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody2().getX(), this.getBody2().getY());
            applet.pushMatrix();
            applet.translate(this.getBody1().getX(), this.getBody1().getY());
            applet.rotate(this.getBody1().getRotation());
            applet.translate(fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_localAnchor1).x, fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_localAnchor1).y);
            applet.translate(-fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_localAnchor2).x, -fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_localAnchor2).y);
            applet.rotate(PApplet.atan2(this.m_axis.y, this.m_axis.x));
            applet.line(-lineHalfLength, 0, lineHalfLength, 0);
            applet.beginShape();
            applet.vertex(lineHalfLength - 4, -4);
            applet.vertex(lineHalfLength, 0);
            applet.vertex(lineHalfLength - 4, 4);
            applet.endShape();
            applet.beginShape();
            applet.vertex(-lineHalfLength + 4, -4);
            applet.vertex(-lineHalfLength, 0);
            applet.vertex(-lineHalfLength + 4, 4);
            applet.endShape();
            applet.popStyle();
            if (this.m_enableLimit) {
                applet.rectMode(PConstants.CORNERS);
                applet.rect(fisica.Fisica.worldToScreen$float(this.m_lowerTranslation), -4, fisica.Fisica.worldToScreen$float(this.m_upperTranslation), 4);
            }
            applet.popMatrix();
            applet.pushStyle();
            applet.noStroke();
            applet.ellipse(this.getAnchorX(), this.getAnchorY(), 5, 5);
            applet.ellipse(this.getBody1().getX(), this.getBody1().getY(), 5, 5);
            applet.ellipse(this.getBody2().getX(), this.getBody2().getY(), 5, 5);
            applet.popStyle();
            this.postDrawDebug(applet);
        }
    }
    fisica.FPrismaticJoint = FPrismaticJoint;
    FPrismaticJoint["__class"] = "fisica.FPrismaticJoint";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Construct a revolute joint between two bodies given an anchor position.
     *
     * @param {fisica.FBody} body1  first body of the joint
     * @param {fisica.FBody} body2  second body of the joint
     * @param {number} x  horizontal coordinate of the anchor given in global coordinates, relative to the canvas' center
     * @param {number} y  vertical coordinate of the anchor given in global coordinates, relative to the canvas' center
     * @class
     * @extends fisica.FJoint
     */
    class FRevoluteJoint extends fisica.FJoint {
        constructor(body1, body2, x, y) {
            if (((body1 != null && body1 instanceof fisica.FBody) || body1 === null) && ((body2 != null && body2 instanceof fisica.FBody) || body2 === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                let __args = arguments;
                super();
                if (this.m_body1 === undefined)
                    this.m_body1 = null;
                if (this.m_body2 === undefined)
                    this.m_body2 = null;
                if (this.m_anchor === undefined)
                    this.m_anchor = null;
                this.m_localAnchor1 = new org.jbox2d.common.Vec2(0.0, 0.0);
                this.m_localAnchor2 = new org.jbox2d.common.Vec2(0.0, 0.0);
                this.m_referenceAngle = 0.0;
                this.m_enableLimit = false;
                this.m_lowerAngle = 0.0;
                this.m_upperAngle = 0.0;
                this.m_enableMotor = false;
                this.m_motorSpeed = 0.0;
                this.m_maxMotorTorque = 0.0;
                if (this.m_body1 === undefined)
                    this.m_body1 = null;
                if (this.m_body2 === undefined)
                    this.m_body2 = null;
                if (this.m_anchor === undefined)
                    this.m_anchor = null;
                (() => {
                    this.m_body1 = body1;
                    this.m_body2 = body2;
                    this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
                    this.updateLocalAnchors();
                    this.m_referenceAngle = Math.fround(this.m_body2.getRotation() - this.m_body1.getRotation());
                })();
            }
            else if (((body1 != null && body1 instanceof fisica.FBody) || body1 === null) && ((body2 != null && body2 instanceof fisica.FBody) || body2 === null) && x === undefined && y === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let x = Math.fround((Math.fround(__args[0].getX() + __args[1].getX())) / 2);
                    let y = Math.fround((Math.fround(__args[0].getY() + __args[1].getY())) / 2);
                    super();
                    if (this.m_body1 === undefined)
                        this.m_body1 = null;
                    if (this.m_body2 === undefined)
                        this.m_body2 = null;
                    if (this.m_anchor === undefined)
                        this.m_anchor = null;
                    this.m_localAnchor1 = new org.jbox2d.common.Vec2(0.0, 0.0);
                    this.m_localAnchor2 = new org.jbox2d.common.Vec2(0.0, 0.0);
                    this.m_referenceAngle = 0.0;
                    this.m_enableLimit = false;
                    this.m_lowerAngle = 0.0;
                    this.m_upperAngle = 0.0;
                    this.m_enableMotor = false;
                    this.m_motorSpeed = 0.0;
                    this.m_maxMotorTorque = 0.0;
                    if (this.m_body1 === undefined)
                        this.m_body1 = null;
                    if (this.m_body2 === undefined)
                        this.m_body2 = null;
                    if (this.m_anchor === undefined)
                        this.m_anchor = null;
                    (() => {
                        this.m_body1 = body1;
                        this.m_body2 = body2;
                        this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
                        this.updateLocalAnchors();
                        this.m_referenceAngle = Math.fround(this.m_body2.getRotation() - this.m_body1.getRotation());
                    })();
                }
            }
            else
                throw new Error('invalid overload');
        }
        updateLocalAnchors() {
            this.m_localAnchor1 = this.m_body1.getLocalWorldPoint(fisica.Fisica.screenToWorld$float$float(this.getAnchorX(), this.getAnchorY()));
            this.m_localAnchor2 = this.m_body2.getLocalWorldPoint(fisica.Fisica.screenToWorld$float$float(this.getAnchorX(), this.getAnchorY()));
        }
        getJointDef(world) {
            let md = new org.jbox2d.dynamics.joints.RevoluteJointDef();
            md.body1 = this.m_body1.m_body;
            md.body2 = this.m_body2.m_body;
            md.localAnchor1 = ((o) => { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                let clone = Object.create(o);
                for (let p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(this.m_localAnchor1);
            md.localAnchor2 = ((o) => { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                let clone = Object.create(o);
                for (let p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(this.m_localAnchor2);
            md.referenceAngle = this.m_referenceAngle;
            md.lowerAngle = this.m_lowerAngle;
            md.upperAngle = this.m_upperAngle;
            md.enableMotor = this.m_enableMotor;
            md.enableLimit = this.m_enableLimit;
            md.motorSpeed = this.m_motorSpeed;
            md.maxMotorTorque = this.m_maxMotorTorque;
            if (this.m_body1.m_body != null) {
                this.m_body1.m_body.wakeUp();
            }
            if (this.m_body2.m_body != null) {
                this.m_body2.m_body.wakeUp();
            }
            return md;
        }
        /**
         * Set the lowest angle allowed.  This property only has effect if the {@code enableLimit} has been set to {@code true} using {@link #setEnableLimit(boolean)}.
         *
         * @param {number} a  lowest angle allowed in radians
         */
        setLowerAngle(a) {
            if (this.m_joint != null) {
                this.m_joint.m_lowerAngle = a;
            }
            this.m_lowerAngle = a;
        }
        /**
         * Set the highest angle allowed.  This property only has effect if the {@code enableLimit} has been set to {@code true} using {@link #setEnableLimit(boolean)}.
         *
         * @param {number} a  highest angle allowed in radians
         */
        setUpperAngle(a) {
            if (this.m_joint != null) {
                this.m_joint.m_upperAngle = a;
            }
            this.m_upperAngle = a;
        }
        /**
         * Set limits to the allowed rotation of one body respect to the other.  If set to {@code true} the limits imposed using {@link #setLowerAngle(float) setLowerAngle} and {@link #setUpperAngle(float) setLowerAngle} are enforced.
         *
         * @param {boolean} value  if {@code true} the bodies will be able to rotate around the anchor only between certain limits
         */
        setEnableLimit(value) {
            if (this.m_joint != null) {
                this.m_joint.m_enableLimit = value;
            }
            this.m_enableLimit = value;
        }
        /**
         * Set the desired rotation speed of the joint.  This property only has effect if the {@code enableMotor} has been set to {@code true} using {@link #setEnableMotor(boolean)}.  The speed is given in radians per second.
         *
         * @param {number} a  the desired speed in radians per second
         */
        setMotorSpeed(a) {
            if (this.m_joint != null) {
                this.m_joint.m_motorSpeed = a;
            }
            this.m_motorSpeed = a;
        }
        /**
         * Set the maximum torque that the joint's motor can apply in order to acheive the desired speed.  This property only has effect if the {@code enableMotor} has been set to {@code true} using {@link #setEnableMotor(boolean)}.
         *
         * @param {number} a  the maximum torque of the joint's motor
         */
        setMaxMotorTorque(a) {
            if (this.m_joint != null) {
                this.m_joint.m_maxMotorTorque = a;
            }
            this.m_maxMotorTorque = a;
        }
        /**
         * Set the state of the motor in order to generate a rotation force (torque) on the joint.  If set to {@code true} the desired motor speed, set using {@link #setMotorSpeed(float) setMotorSpeed}, will try to be matched using a motor with a maximum rotation force (torque) set using {@link #setMaxMotorTorque(float) setMaxMotorTorque}.
         *
         * @param {boolean} value  if {@code true} the joint will receive the rotation force (torque) of a motor
         */
        setEnableMotor(value) {
            if (this.m_joint != null) {
                this.m_joint.m_enableMotor = value;
            }
            this.m_enableMotor = value;
        }
        /**
         * Sets the position of the anchor of the joint around which the bodies rotate.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @param {number} x  the horizontal coordinate of the anchor in global coordinates, relative to the center of the canvas
         * @param {number} y  the vertical coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        setAnchor(x, y) {
            if (this.m_joint != null) {
                this.m_joint.getAnchor2().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
            this.updateLocalAnchors();
        }
        /**
         * Get the horizontal coordinate of the anchor of the joint around which the bodies can rotate.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @return  {number} the horizontal coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        getAnchorX() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.x);
        }
        /**
         * Get the vertical coordinate of the anchor of the joint around which the bodies can rotate.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @return  {number} the vertical coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        getAnchorY() {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.y);
        }
        setReferenceAngle(ang) {
            this.m_referenceAngle = ang;
        }
        draw(applet) {
            this.preDraw(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody1().getX(), this.getBody1().getY());
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody2().getX(), this.getBody2().getY());
            applet.ellipse(this.getAnchorX(), this.getAnchorY(), 10, 10);
            this.postDraw(applet);
        }
        drawDebug(applet) {
            this.preDrawDebug(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody1().getX(), this.getBody1().getY());
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody2().getX(), this.getBody2().getY());
            applet.ellipse(this.getAnchorX(), this.getAnchorY(), 10, 10);
            this.postDrawDebug(applet);
        }
    }
    fisica.FRevoluteJoint = FRevoluteJoint;
    FRevoluteJoint["__class"] = "fisica.FRevoluteJoint";
})(fisica || (fisica = {}));
