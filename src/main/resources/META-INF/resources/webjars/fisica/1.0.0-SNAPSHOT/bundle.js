var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
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
    var FContact = (function () {
        function FContact(contactPoint) {
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
            var s1 = contactPoint.shape1;
            var s2 = contactPoint.shape2;
            this.m_body1 = s1.m_userData != null ? s1.m_userData : s1.getBody().getUserData();
            this.m_body2 = s2.m_userData != null ? s2.m_userData : s2.getBody().getUserData();
            this.m_id = new fisica.FContactID(new org.jbox2d.collision.ContactID(contactPoint.id), this.m_body1, this.m_body2);
        }
        /**
         * Returns the first body involved in the contact.
         * @return {fisica.FBody} first of the bodies involved in the contact
         */
        FContact.prototype.getBody1 = function () {
            return this.m_body1;
        };
        /**
         * Returns the second body involved in the contact.
         * @return {fisica.FBody} second of the bodies involved in the contact
         */
        FContact.prototype.getBody2 = function () {
            return this.m_body2;
        };
        /**
         * Returns the horizontal position of the contact point.
         *
         * @return {number} the horizontal position of the contact point in pixels
         * @see #getY
         */
        FContact.prototype.getX = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).x;
        };
        /**
         * Returns the vertical position of the contact point.
         *
         * @return {number} the vertical position of the contact point in pixels
         * @see #getX
         */
        FContact.prototype.getY = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).y;
        };
        /**
         * Returns the horizontal component of the contact velocity.
         *
         * @return {number} the horizontal component of the contact velocity
         * @see #getVelocityY
         */
        FContact.prototype.getVelocityX = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_velocity).x;
        };
        /**
         * Returns the vertical component of the contact velocity.
         *
         * @return {number} the vertical component of the contact velocity
         * @see #getVelocityX
         */
        FContact.prototype.getVelocityY = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_velocity).y;
        };
        /**
         * Returns the horizontal component of the contact normal.
         *
         * @return {number} the horizontal component of the contact normal
         * @see #getNormalY
         */
        FContact.prototype.getNormalX = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).x;
        };
        /**
         * Returns the vertical component of the contact normal.
         *
         * @return {number} the vertical component of the contact normal
         * @see #getNormalX
         */
        FContact.prototype.getNormalY = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).y;
        };
        /**
         * Get the separation between the bodies.
         *
         * @return {number} a positive value means that the bodies have space between them, negative values means that the bodies have penetrated each other
         */
        FContact.prototype.getSeparation = function () {
            return fisica.Fisica.worldToScreen$float(this.m_separation);
        };
        /**
         * Get the friction coefficient of the contact.  The friction determines the ratio of the reaction force tangent to a contact that the two bodies will recieve.  Basically it can be seen as a coefficient that will control how the bodies get slown down when they slide against each other.  This value depends on the friction coefficients of the two bodies involved in the contact.
         *
         * @return {number} a positive value.  A value of 0 means no friction and thus the body will not be slown down if no other forces are applied
         */
        FContact.prototype.getFriction = function () {
            return this.m_friction;
        };
        /**
         * Get the restitution coefficient of the contact.  The restitution determines the ratio of the reaction force normal to a contact that the two bodies will recieve.  Basically it can be seen as a coefficient that will control the strength with which the bodies bounce back from the collision.  This value depends on the resititution coefficients of the two bodies involved in the contact.
         *
         * @return {number} a positive value.  A value of 0 means no bounce after a collision, and a value of 1 means bounce with it's full speed from a collision
         */
        FContact.prototype.getRestitution = function () {
            return this.m_restitution;
        };
        /**
         * Get the identifier of the contact.  This value is useful in order to uniquely identify a contact.  A new contact ID is created whenever to bodies enter into contact at a given point.  If the bodies slide against each other the contact ID is maintained even if the point of contact is modified due to the slide.  As soon as the two bodies separate the contact is considered ended.
         *
         * @return {fisica.FContactID} a unique identifier representing the contact
         */
        FContact.prototype.getId = function () {
            return this.m_id;
        };
        FContact.prototype.contains$java_lang_String$java_lang_String = function (n1, n2) {
            if (this.getBody1() == null || this.getBody2() == null) {
                return false;
            }
            if (this.getBody1().getName() == null || this.getBody2().getName() == null) {
                return false;
            }
            return (((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody1().getName(), n1) && (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody2().getName(), n2)) || ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody1().getName(), n2) && (function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody2().getName(), n1)));
        };
        /**
         * Returns true if the contact contains the two bodies.  If one of the bodies does not have a name this function returns false.
         *
         * @param {string} n1 the name of one of the bodies
         * @param {string} n2 the name of another one of the bodies
         * @return {boolean} true if the contact bodies have the names given by the parameters
         * @see FBody#setName
         */
        FContact.prototype.contains = function (n1, n2) {
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
        };
        FContact.prototype.contains$fisica_FBody$fisica_FBody = function (n1, n2) {
            if (this.getBody1() == null || this.getBody2() == null) {
                return false;
            }
            return ((this.getBody1() === n1 && this.getBody2() === n2) || (this.getBody1() === n2 && this.getBody2() === n1));
        };
        FContact.prototype.contains$java_lang_String = function (n1) {
            if ((this.getBody1() != null) && (this.getBody1().getName() != null) && ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody1().getName(), n1))) {
                return true;
            }
            if ((this.getBody2() != null) && (this.getBody2().getName() != null) && ((function (o1, o2) { if (o1 && o1.equals) {
                return o1.equals(o2);
            }
            else {
                return o1 === o2;
            } })(this.getBody2().getName(), n1))) {
                return true;
            }
            return false;
        };
        FContact.prototype.contains$fisica_FBody = function (n1) {
            if ((this.getBody1() != null) && (this.getBody1() === n1)) {
                return true;
            }
            if ((this.getBody2() != null) && (this.getBody2() === n1)) {
                return true;
            }
            return false;
        };
        return FContact;
    }());
    fisica.FContact = FContact;
    FContact["__class"] = "fisica.FContact";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Provides default do-nothing implementations of all {@link FContactListener}
     * methods.
     * @class
     */
    var FContactAdapter = (function () {
        function FContactAdapter() {
        }
        /**
         *
         * @param {fisica.FContact} contact
         */
        FContactAdapter.prototype.contactStarted = function (contact) {
        };
        /**
         *
         * @param {fisica.FContact} contact
         */
        FContactAdapter.prototype.contactPersisted = function (contact) {
        };
        /**
         *
         * @param {fisica.FContact} contact
         */
        FContactAdapter.prototype.contactEnded = function (contact) {
        };
        /**
         *
         * @param {fisica.FContactResult} result
         */
        FContactAdapter.prototype.contactResult = function (result) {
        };
        return FContactAdapter;
    }());
    fisica.FContactAdapter = FContactAdapter;
    FContactAdapter["__class"] = "fisica.FContactAdapter";
    FContactAdapter["__interfaces"] = ["fisica.FContactListener"];
})(fisica || (fisica = {}));
(function (fisica) {
    var FContactID = (function () {
        function FContactID(id, b1, b2) {
            var _this = this;
            if (((id != null && id instanceof org.jbox2d.collision.ContactID) || id === null) && ((b1 != null && b1 instanceof fisica.FBody) || b1 === null) && ((b2 != null && b2 instanceof fisica.FBody) || b2 === null)) {
                var __args = arguments;
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
                (function () {
                    _this.m_id = id;
                    _this.m_b1 = b1;
                    _this.m_b2 = b2;
                })();
            }
            else if (((id != null && id instanceof fisica.FContactID) || id === null) && b1 === undefined && b2 === undefined) {
                var __args = arguments;
                var fid_1 = __args[0];
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
                (function () {
                    _this.m_id = new org.jbox2d.collision.ContactID(fid_1.m_id);
                    _this.m_b1 = fid_1.m_b1;
                    _this.m_b2 = fid_1.m_b2;
                })();
            }
            else
                throw new Error('invalid overload');
        }
        FContactID.prototype.hashCode = function () {
            var result = 0;
            var h1 = (function (o) { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
            } })(this.m_b1);
            var h2 = (function (o) { if (o.hashCode) {
                return o.hashCode();
            }
            else {
                return o.toString().split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
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
        };
        FContactID.prototype.toString = function () {
            return this.m_id.features.toString();
        };
        FContactID.prototype.equals = function (obj) {
            if (this === obj)
                return true;
            if ((obj == null) || (obj.constructor !== this.constructor))
                return false;
            var test = obj;
            return this.m_id.isEqual(test.m_id);
        };
        return FContactID;
    }());
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
    var FContactResult = (function () {
        function FContactResult(contactResult) {
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
        FContactResult.prototype.getBody1 = function () {
            return this.m_body1;
        };
        /**
         * Returns the second body involved in the contact.
         * @return {fisica.FBody} second of the bodies involved in the contact
         */
        FContactResult.prototype.getBody2 = function () {
            return this.m_body2;
        };
        /**
         * Returns the horizontal position of the contact point.
         *
         * @return {number} the horizontal position of the contact point in pixels
         * @see #getY
         */
        FContactResult.prototype.getX = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).x;
        };
        /**
         * Returns the vertical position of the contact point.
         *
         * @return {number} the vertical position of the contact point in pixels
         * @see #getX
         */
        FContactResult.prototype.getY = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).y;
        };
        /**
         * Returns the horizontal component of the contact normal.
         *
         * @return {number} the horizontal component of the contact normal
         * @see #getNormalY
         */
        FContactResult.prototype.getNormalX = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).x;
        };
        /**
         * Returns the vertical component of the contact normal.
         *
         * @return {number} the vertical component of the contact normal
         * @see #getNormalX
         */
        FContactResult.prototype.getNormalY = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).y;
        };
        /**
         * Returns the normal component of the impulse of the contact.  This gives an idea of the strength of the collision that took place.  This represents the impulse necessary to avoid penetration of the bodies involved in the collision.  The impluse is simply the force multiplied by the timestep.  The result is returned in impulse units (kg * pixels / s).
         *
         * @return {number} the normal component of the contact's impulse
         * @see #getTangentImpulse
         */
        FContactResult.prototype.getNormalImpulse = function () {
            return fisica.Fisica.worldToScreen$float(this.m_normalImpulse);
        };
        /**
         * Returns the tangential component of the impulse of the contact.  This gives an idea of the strength of the friction between the bodies that took place.  The impluse is simply the force multiplied by the timestep.  The result is returned in impulse units (kg * pixels / s).
         *
         * @return {number} the tangent component of the contact's impulse
         * @see #getNormalImpulse
         */
        FContactResult.prototype.getTangentImpulse = function () {
            return fisica.Fisica.worldToScreen$float(this.m_tangentImpulse);
        };
        /**
         * Get the identifier of the contact.  This value is useful in order to uniquely identify a contact.  A new contact ID is created whenever to bodies enter into contact at a given point.  If the bodies slide against each other the contact ID is maintained even if the point of contact is modified due to the slide.  As soon as the two bodies separate the contact is considered ended.
         *
         * @return {fisica.FContactID} a unique identifier representing the contact
         */
        FContactResult.prototype.getId = function () {
            return this.m_id;
        };
        return FContactResult;
    }());
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
    var FDrawable = (function () {
        function FDrawable() {
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
        FDrawable.prototype.updateStyle = function (other) {
            this.m_drawable = other.m_drawable;
            this.m_fill = other.m_fill;
            this.m_fillColor = other.m_fillColor;
            this.m_stroke = other.m_stroke;
            this.m_strokeColor = other.m_strokeColor;
            this.m_strokeWeight = other.m_strokeWeight;
            this.m_image = other.m_image;
            this.m_imageAlpha = other.m_imageAlpha;
            this.m_mask = other.m_mask;
        };
        FDrawable.prototype.appletStroke = function (applet, argb) {
            var a = (argb >> 24) & 255;
            var r = (argb >> 16) & 255;
            var g = (argb >> 8) & 255;
            var b = argb & 255;
            applet.stroke(r, g, b, a);
        };
        FDrawable.prototype.appletFill = function (applet, argb) {
            var a = (argb >> 24) & 255;
            var r = (argb >> 16) & 255;
            var g = (argb >> 8) & 255;
            var b = argb & 255;
            applet.fill(r, g, b, a);
        };
        FDrawable.prototype.appletFillStroke = function (applet) {
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
        };
        FDrawable.prototype.drawImage = function (applet) {
            applet.tint(255, 255, 255, this.m_imageAlpha);
            applet.image(this.m_image, 0 - (this.m_image.width / 2 | 0), 0 - (this.m_image.height / 2 | 0));
            applet.tint(255, 255, 255, 255);
        };
        /**
         * This method is called when calling {@code world.draw()}.
         * This method may be overriden to allow custom drawing of the object.
         *
         * @param {PGraphics} graphics  the graphics onto which the object must be drawn.
         */
        FDrawable.prototype.draw = function (graphics) {
        };
        /**
         * This method is called when calling {@code world.drawDebug()}.
         * This method may be overriden to allow custom debug drawing of the object.
         *
         * @param {PGraphics} graphics  the graphics onto which the object must be drawn.
         */
        FDrawable.prototype.drawDebug = function (graphics) {
        };
        /**
         * Attach an image to the object.
         * This method allows to draw an image onto the screen instead of calling the {@link #draw(PApplet)} method.
         *
         * @param {PImage} img  the PImage to attach to the object.
         */
        FDrawable.prototype.attachImage = function (img) {
            this.m_image = img;
        };
        /**
         * Dettach any image that has been attached to the object.
         *
         * @see #attachImage(PImage)
         */
        FDrawable.prototype.dettachImage = function () {
            this.m_image = null;
        };
        /**
         * Get the opacity with which to draw the attached image.
         *
         * @return {number} the opacity, a value from 0.0 to 1.0 with which to draw the attached image
         * @see #attachImage(PImage)
         * @see #setImageAlpha(float)
         */
        FDrawable.prototype.getImageAlpha = function () {
            return this.m_imageAlpha;
        };
        /**
         * Set the opacity with which to draw the attached image.
         *
         * @param {number} alpha   the opacity, a value from 0.0 to 1.0 with which to draw the attached image
         * @see #attachImage(PImage)
         * @see #getImageAlpha()
         */
        FDrawable.prototype.setImageAlpha = function (alpha) {
            this.m_imageAlpha = alpha;
        };
        /**
         * Set whether the object must be drawn or not.
         *
         * @param {boolean} drawable  if {@code true} the object will be drawn, else it will not
         * @see #isDrawable()
         */
        FDrawable.prototype.setDrawable = function (drawable) {
            this.m_drawable = drawable;
        };
        /**
         * Get whether the object must be drawn or not.
         *
         * @return {boolean} drawable  if {@code true} the object will be drawn, else it will not
         * @see #setDrawable(boolean)
         */
        FDrawable.prototype.isDrawable = function () {
            return this.m_drawable;
        };
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
        FDrawable.prototype.getFillColor = function () {
            return this.m_fillColor;
        };
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
        FDrawable.prototype.setFillColor = function (col) {
            this.m_fill = true;
            this.m_fillColor = col;
        };
        /**
         * Set that the object must  be drawn without fill.
         *
         * @see #setFill(float)
         * @see #setFill(float,float)
         * @see #setFill(float,float,float)
         * @see #setFill(float,float,float,float)
         */
        FDrawable.prototype.setNoFill = function () {
            this.m_fill = false;
        };
        FDrawable.prototype.setFill$float = function (g) {
            this.setFillColor(fisica.Fisica.parent().color(g));
        };
        FDrawable.prototype.setFill$float$float = function (g, a) {
            this.setFillColor(fisica.Fisica.parent().color(g, a));
        };
        FDrawable.prototype.setFill$float$float$float = function (r, g, b) {
            this.setFillColor(fisica.Fisica.parent().color(r, g, b));
        };
        FDrawable.prototype.setFill$float$float$float$float = function (r, g, b, a) {
            this.setFillColor(fisica.Fisica.parent().color(r, g, b, a));
        };
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
        FDrawable.prototype.setFill = function (r, g, b, a) {
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
        };
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
        FDrawable.prototype.setStrokeColor = function (col) {
            this.m_stroke = true;
            this.m_strokeColor = col;
        };
        /**
         * Set that the object must  be drawn without stroke.
         *
         * @see #setStroke(float)
         * @see #setStroke(float,float)
         * @see #setStroke(float,float,float)
         * @see #setStroke(float,float,float,float)
         */
        FDrawable.prototype.setNoStroke = function () {
            this.m_stroke = false;
        };
        FDrawable.prototype.setStroke$float = function (g) {
            this.setStrokeColor(fisica.Fisica.parent().color(g));
        };
        FDrawable.prototype.setStroke$float$float = function (g, a) {
            this.setStrokeColor(fisica.Fisica.parent().color(g, a));
        };
        FDrawable.prototype.setStroke$float$float$float = function (r, g, b) {
            this.setStrokeColor(fisica.Fisica.parent().color(r, g, b));
        };
        FDrawable.prototype.setStroke$float$float$float$float = function (r, g, b, a) {
            this.setStrokeColor(fisica.Fisica.parent().color(r, g, b, a));
        };
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
        FDrawable.prototype.setStroke = function (r, g, b, a) {
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
        };
        /**
         * Set the stroke weight of the object.
         *
         * @param {number} weight   weight value in pixels
         * @see #setStroke(float)
         * @see #setStroke(float,float)
         * @see #setStroke(float,float,float)
         * @see #setStroke(float,float,float,float)
         */
        FDrawable.prototype.setStrokeWeight = function (weight) {
            this.m_strokeWeight = weight;
        };
        return FDrawable;
    }());
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
    var Fisica = (function () {
        function Fisica() {
        }
        Fisica.screenToWorld$org_jbox2d_common_Vec2 = function (m_in) {
            return Fisica.m_viewport.getScreenToWorld$org_jbox2d_common_Vec2(m_in);
        };
        Fisica.screenToWorld$float$float = function (x, y) {
            return Fisica.m_viewport.getScreenToWorld$float$float(x, y);
        };
        Fisica.screenToWorld = function (x, y) {
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
        };
        Fisica.screenToWorld$float = function (a) {
            return Fisica.m_viewport.getScreenToWorld$float(a);
        };
        Fisica.worldToScreen$org_jbox2d_common_Vec2 = function (m_in) {
            return Fisica.m_viewport.getWorldToScreen$org_jbox2d_common_Vec2(m_in);
        };
        Fisica.worldToScreen$float$float = function (x, y) {
            return Fisica.m_viewport.getWorldToScreen$float$float(x, y);
        };
        Fisica.worldToScreen = function (x, y) {
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
        };
        Fisica.worldToScreen$float = function (a) {
            return Fisica.m_viewport.getWorldToScreen$float(a);
        };
        Fisica.initialized = function () {
            return Fisica.m_initialized;
        };
        Fisica.parent = function () {
            if (Fisica.m_parent == null) {
                throw new Fisica.LibraryNotInitializedException();
            }
            return Fisica.m_parent;
        };
        Fisica.parentGraphics = function () {
            if (Fisica.m_parentGraphics == null) {
                throw new Fisica.LibraryNotInitializedException();
            }
            return Fisica.m_parentGraphics;
        };
        /**
         * Initialize the library.  Must be called before any use of the library.  Must be called by passing the PApplet.  e.g. {@code Fisica.init(this)}
         *
         * @param {*} applet  The applet on which to use the library.  This library can only be used with one applet
         */
        Fisica.init = function (applet) {
            Fisica.m_parent = applet;
            Fisica.m_parentGraphics = (applet);
            Fisica.m_parentGraphics.beginDraw();
            Fisica.m_initialized = true;
            Fisica.m_viewport = new Fisica.FViewport();
            Fisica.m_viewport.setScaleTransform(20);
        };
        /**
         * Set the scale from screen units to world units.  By setting the scale to 20 we are stating that 20 pixels is equivalent to 1 meter in the simulated world.
         *
         * @param {number} scale the number of pixels that are equivalent to 1 meter in the simulated world.
         */
        Fisica.setScale = function (scale) {
            Fisica.m_viewport.m_scale = scale;
        };
        return Fisica;
    }());
    Fisica.m_initialized = false;
    Fisica.m_parent = null;
    Fisica.m_viewport = null;
    Fisica.m_parentGraphics = null;
    fisica.Fisica = Fisica;
    Fisica["__class"] = "fisica.Fisica";
    Fisica["__interfaces"] = ["def.processing.core.PConstants"];
    (function (Fisica) {
        var FViewport = (function () {
            function FViewport() {
                if (this.m_scale === undefined)
                    this.m_scale = 0;
                this.m_scale = 1.0;
            }
            FViewport.prototype.setScaleTransform = function (a) {
                this.m_scale = a;
            };
            FViewport.prototype.getScreenToWorld$float = function (a) {
                return Math.fround(a / this.m_scale);
            };
            FViewport.prototype.getScreenToWorld$float$float = function (x, y) {
                return new org.jbox2d.common.Vec2(Math.fround(x / this.m_scale), Math.fround(y / this.m_scale));
            };
            FViewport.prototype.getScreenToWorld = function (x, y) {
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
            };
            FViewport.prototype.getScreenToWorld$org_jbox2d_common_Vec2 = function (p) {
                return new org.jbox2d.common.Vec2(Math.fround(p.x / this.m_scale), Math.fround(p.y / this.m_scale));
            };
            FViewport.prototype.getWorldToScreen$float = function (a) {
                return Math.fround(a * this.m_scale);
            };
            FViewport.prototype.getWorldToScreen$float$float = function (x, y) {
                return new org.jbox2d.common.Vec2(Math.fround(x * this.m_scale), Math.fround(y * this.m_scale));
            };
            FViewport.prototype.getWorldToScreen = function (x, y) {
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
            };
            FViewport.prototype.getWorldToScreen$org_jbox2d_common_Vec2 = function (p) {
                return new org.jbox2d.common.Vec2(Math.fround(p.x * this.m_scale), Math.fround(p.y * this.m_scale));
            };
            return FViewport;
        }());
        Fisica.FViewport = FViewport;
        FViewport["__class"] = "fisica.Fisica.FViewport";
        /**
         * Exception thrown when the library has not been initialized.  The method {@link Fisica#init(PApplet)} must be called before any use of the library.
         *
         * @param applet  The applet on which to use the library.  This library can only be used with one applet
         * @extends Error
         * @class
         */
        var LibraryNotInitializedException = (function () {
            function LibraryNotInitializedException() {
                Object.setPrototypeOf(this, LibraryNotInitializedException.prototype);
            }
            return LibraryNotInitializedException;
        }());
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
    var FRaycastResult = (function () {
        function FRaycastResult() {
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
        FRaycastResult.prototype.set = function (x1, y1, x2, y2, raycastResult) {
            if (raycastResult != null) {
                this.m_lambda = raycastResult.lambda;
                this.m_normal.set(raycastResult.normal);
            }
            this.m_x1 = x1;
            this.m_x2 = x2;
            this.m_y1 = y1;
            this.m_y2 = y2;
            return this;
        };
        /**
         * Returns the lambda of the raycast result.
         *
         * @return {number} the lambda of the raycast result
         */
        FRaycastResult.prototype.getLambda = function () {
            return this.m_lambda;
        };
        /**
         * Returns the horizontal component of the ray cast contact normal.
         *
         * @return {number} the horizontal component of the ray cast contact normal
         * @see #getNormalY
         */
        FRaycastResult.prototype.getNormalX = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).x;
        };
        /**
         * Returns the vertical component of the ray cast contact normal.
         *
         * @return {number} the vertical component of the ray cast contact normal
         * @see #getNormalX
         */
        FRaycastResult.prototype.getNormalY = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_normal).y;
        };
        /**
         * Returns the horizontal component of the ray cast contact normal.
         *
         * @return {number} the horizontal component of the ray cast contact normal
         * @see #getY
         * @see #getNormalX
         * @see #getNormalY
         */
        FRaycastResult.prototype.getX = function () {
            return PApplet.lerp(this.m_x1, this.m_x2, this.m_lambda);
        };
        /**
         * Returns the vertical component of the contact ray cast normal.
         *
         * @return {number} the vertical component of the contact ray cast normal
         * @see #getX
         * @see #getNormalX
         * @see #getNormalY
         */
        FRaycastResult.prototype.getY = function () {
            return PApplet.lerp(this.m_y1, this.m_y2, this.m_lambda);
        };
        return FRaycastResult;
    }());
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
    var FWorld = (function (_super) {
        __extends(FWorld, _super);
        function FWorld(topLeftX, topLeftY, bottomRightX, bottomRightY) {
            var _this = this;
            if (((typeof topLeftX === 'number') || topLeftX === null) && ((typeof topLeftY === 'number') || topLeftY === null) && ((typeof bottomRightX === 'number') || bottomRightX === null) && ((typeof bottomRightY === 'number') || bottomRightY === null)) {
                var __args = arguments;
                _this = _super.call(this, new org.jbox2d.collision.AABB(fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(topLeftX, topLeftY)), fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(bottomRightX, bottomRightY))), fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(0.0, 10.0)), true) || this;
                if (_this.left === undefined)
                    _this.left = null;
                if (_this.right === undefined)
                    _this.right = null;
                if (_this.top === undefined)
                    _this.top = null;
                if (_this.bottom === undefined)
                    _this.bottom = null;
                if (_this.m_topLeftX === undefined)
                    _this.m_topLeftX = 0;
                if (_this.m_topLeftY === undefined)
                    _this.m_topLeftY = 0;
                if (_this.m_bottomRightX === undefined)
                    _this.m_bottomRightX = 0;
                if (_this.m_bottomRightY === undefined)
                    _this.m_bottomRightY = 0;
                if (_this.m_contacts === undefined)
                    _this.m_contacts = null;
                if (_this.m_contactResults === undefined)
                    _this.m_contactResults = null;
                if (_this.m_actions === undefined)
                    _this.m_actions = null;
                if (_this.m_contactListener === undefined)
                    _this.m_contactListener = null;
                if (_this.m_clientContactListener === undefined)
                    _this.m_clientContactListener = null;
                if (_this.m_contactStartedMethod === undefined)
                    _this.m_contactStartedMethod = null;
                if (_this.m_contactPersistedMethod === undefined)
                    _this.m_contactPersistedMethod = null;
                if (_this.m_contactEndedMethod === undefined)
                    _this.m_contactEndedMethod = null;
                if (_this.m_contactResultMethod === undefined)
                    _this.m_contactResultMethod = null;
                _this.m_edgesFriction = 0.1;
                _this.m_edgesRestitution = 0.1;
                _this.m_grabbable = true;
                _this.m_grabPositionX = 0.0;
                _this.m_grabPositionY = 0.0;
                _this.m_mouseButton = PConstants.LEFT;
                _this.m_fbodies = ([]);
                _this.m_mouseJoint = new fisica.FMouseJoint(null, 0.0, 0.0);
                _this.m_small = new org.jbox2d.common.Vec2(0.001, 0.001);
                _this.m_aabb = new org.jbox2d.collision.AABB();
                if (_this.left === undefined)
                    _this.left = null;
                if (_this.right === undefined)
                    _this.right = null;
                if (_this.top === undefined)
                    _this.top = null;
                if (_this.bottom === undefined)
                    _this.bottom = null;
                if (_this.m_topLeftX === undefined)
                    _this.m_topLeftX = 0;
                if (_this.m_topLeftY === undefined)
                    _this.m_topLeftY = 0;
                if (_this.m_bottomRightX === undefined)
                    _this.m_bottomRightX = 0;
                if (_this.m_bottomRightY === undefined)
                    _this.m_bottomRightY = 0;
                if (_this.m_contacts === undefined)
                    _this.m_contacts = null;
                if (_this.m_contactResults === undefined)
                    _this.m_contactResults = null;
                if (_this.m_actions === undefined)
                    _this.m_actions = null;
                if (_this.m_contactListener === undefined)
                    _this.m_contactListener = null;
                if (_this.m_clientContactListener === undefined)
                    _this.m_clientContactListener = null;
                if (_this.m_contactStartedMethod === undefined)
                    _this.m_contactStartedMethod = null;
                if (_this.m_contactPersistedMethod === undefined)
                    _this.m_contactPersistedMethod = null;
                if (_this.m_contactEndedMethod === undefined)
                    _this.m_contactEndedMethod = null;
                if (_this.m_contactResultMethod === undefined)
                    _this.m_contactResultMethod = null;
                (function () {
                    _this.m_topLeftX = topLeftX;
                    _this.m_topLeftY = topLeftY;
                    _this.m_bottomRightX = bottomRightX;
                    _this.m_bottomRightY = bottomRightY;
                    _super.prototype.setWarmStarting.call(_this, true);
                    _super.prototype.setPositionCorrection.call(_this, true);
                    _super.prototype.setContinuousPhysics.call(_this, true);
                    fisica.Fisica.parent().registerMethod("mouseEvent", _this);
                    _this.m_contactStartedMethod = ((fisica.Fisica.parent())["contactStarted"]);
                    _this.m_contactPersistedMethod = ((fisica.Fisica.parent())["contactPersisted"]);
                    _this.m_contactEndedMethod = ((fisica.Fisica.parent())["contactEnded"]);
                    _this.m_contactResultMethod = ((fisica.Fisica.parent())["contactResult"]);
                    _this.m_contactListener = new FWorld.ConcreteContactListener(_this);
                    _this.m_contactListener.m_world = _this;
                    _this.setContactListener$org_jbox2d_dynamics_ContactListener(_this.m_contactListener);
                    _this.m_contacts = ({});
                    _this.m_contactResults = ([]);
                    _this.m_actions = ([]);
                    _this.m_mouseJoint.setDrawable(false);
                    _this.setGravity$float$float(0, 200);
                })();
            }
            else if (topLeftX === undefined && topLeftY === undefined && bottomRightX === undefined && bottomRightY === undefined) {
                var __args = arguments;
                {
                    var __args_1 = arguments;
                    var topLeftX_1 = -fisica.Fisica.parent().width;
                    var topLeftY_1 = -fisica.Fisica.parent().height;
                    var bottomRightX_1 = 2 * fisica.Fisica.parent().width;
                    var bottomRightY_1 = 2 * fisica.Fisica.parent().height;
                    _this = _super.call(this, new org.jbox2d.collision.AABB(fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(topLeftX_1, topLeftY_1)), fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(bottomRightX_1, bottomRightY_1))), fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(0.0, 10.0)), true) || this;
                    if (_this.left === undefined)
                        _this.left = null;
                    if (_this.right === undefined)
                        _this.right = null;
                    if (_this.top === undefined)
                        _this.top = null;
                    if (_this.bottom === undefined)
                        _this.bottom = null;
                    if (_this.m_topLeftX === undefined)
                        _this.m_topLeftX = 0;
                    if (_this.m_topLeftY === undefined)
                        _this.m_topLeftY = 0;
                    if (_this.m_bottomRightX === undefined)
                        _this.m_bottomRightX = 0;
                    if (_this.m_bottomRightY === undefined)
                        _this.m_bottomRightY = 0;
                    if (_this.m_contacts === undefined)
                        _this.m_contacts = null;
                    if (_this.m_contactResults === undefined)
                        _this.m_contactResults = null;
                    if (_this.m_actions === undefined)
                        _this.m_actions = null;
                    if (_this.m_contactListener === undefined)
                        _this.m_contactListener = null;
                    if (_this.m_clientContactListener === undefined)
                        _this.m_clientContactListener = null;
                    if (_this.m_contactStartedMethod === undefined)
                        _this.m_contactStartedMethod = null;
                    if (_this.m_contactPersistedMethod === undefined)
                        _this.m_contactPersistedMethod = null;
                    if (_this.m_contactEndedMethod === undefined)
                        _this.m_contactEndedMethod = null;
                    if (_this.m_contactResultMethod === undefined)
                        _this.m_contactResultMethod = null;
                    _this.m_edgesFriction = 0.1;
                    _this.m_edgesRestitution = 0.1;
                    _this.m_grabbable = true;
                    _this.m_grabPositionX = 0.0;
                    _this.m_grabPositionY = 0.0;
                    _this.m_mouseButton = PConstants.LEFT;
                    _this.m_fbodies = ([]);
                    _this.m_mouseJoint = new fisica.FMouseJoint(null, 0.0, 0.0);
                    _this.m_small = new org.jbox2d.common.Vec2(0.001, 0.001);
                    _this.m_aabb = new org.jbox2d.collision.AABB();
                    if (_this.left === undefined)
                        _this.left = null;
                    if (_this.right === undefined)
                        _this.right = null;
                    if (_this.top === undefined)
                        _this.top = null;
                    if (_this.bottom === undefined)
                        _this.bottom = null;
                    if (_this.m_topLeftX === undefined)
                        _this.m_topLeftX = 0;
                    if (_this.m_topLeftY === undefined)
                        _this.m_topLeftY = 0;
                    if (_this.m_bottomRightX === undefined)
                        _this.m_bottomRightX = 0;
                    if (_this.m_bottomRightY === undefined)
                        _this.m_bottomRightY = 0;
                    if (_this.m_contacts === undefined)
                        _this.m_contacts = null;
                    if (_this.m_contactResults === undefined)
                        _this.m_contactResults = null;
                    if (_this.m_actions === undefined)
                        _this.m_actions = null;
                    if (_this.m_contactListener === undefined)
                        _this.m_contactListener = null;
                    if (_this.m_clientContactListener === undefined)
                        _this.m_clientContactListener = null;
                    if (_this.m_contactStartedMethod === undefined)
                        _this.m_contactStartedMethod = null;
                    if (_this.m_contactPersistedMethod === undefined)
                        _this.m_contactPersistedMethod = null;
                    if (_this.m_contactEndedMethod === undefined)
                        _this.m_contactEndedMethod = null;
                    if (_this.m_contactResultMethod === undefined)
                        _this.m_contactResultMethod = null;
                    (function () {
                        _this.m_topLeftX = topLeftX_1;
                        _this.m_topLeftY = topLeftY_1;
                        _this.m_bottomRightX = bottomRightX_1;
                        _this.m_bottomRightY = bottomRightY_1;
                        _super.prototype.setWarmStarting.call(_this, true);
                        _super.prototype.setPositionCorrection.call(_this, true);
                        _super.prototype.setContinuousPhysics.call(_this, true);
                        fisica.Fisica.parent().registerMethod("mouseEvent", _this);
                        _this.m_contactStartedMethod = ((fisica.Fisica.parent())["contactStarted"]);
                        _this.m_contactPersistedMethod = ((fisica.Fisica.parent())["contactPersisted"]);
                        _this.m_contactEndedMethod = ((fisica.Fisica.parent())["contactEnded"]);
                        _this.m_contactResultMethod = ((fisica.Fisica.parent())["contactResult"]);
                        _this.m_contactListener = new FWorld.ConcreteContactListener(_this);
                        _this.m_contactListener.m_world = _this;
                        _this.setContactListener$org_jbox2d_dynamics_ContactListener(_this.m_contactListener);
                        _this.m_contacts = ({});
                        _this.m_contactResults = ([]);
                        _this.m_actions = ([]);
                        _this.m_mouseJoint.setDrawable(false);
                        _this.setGravity$float$float(0, 200);
                    })();
                }
            }
            else
                throw new Error('invalid overload');
            return _this;
        }
        FWorld.prototype.addBody = function (body) {
            if (body == null) {
                return;
            }
            /* add */ (this.m_fbodies.push(body) > 0);
            body.addToWorld(this);
        };
        FWorld.prototype.removeBody = function (body) {
            if (body == null) {
                return;
            }
            if (body === this.m_mouseJoint.getGrabbedBody()) {
                this.removeJoint(this.m_mouseJoint);
                this.m_mouseJoint.releaseGrabbedBody();
            }
            /* remove */ (function (a) { var index = a.indexOf(body); if (index >= 0) {
                a.splice(index, 1);
                return true;
            }
            else {
                return false;
            } })(this.m_fbodies);
            body.removeFromWorld();
        };
        FWorld.prototype.addJoint = function (joint) {
            if (joint == null) {
                return;
            }
            joint.addToWorld(this);
        };
        FWorld.prototype.removeJoint = function (joint) {
            if (joint == null) {
                return;
            }
            joint.removeFromWorld();
        };
        FWorld.prototype.setContactListener$fisica_FContactListener = function (listener) {
            this.m_clientContactListener = listener;
        };
        FWorld.prototype.setContactListener = function (listener) {
            if (((listener != null && (listener["__interfaces"] != null && listener["__interfaces"].indexOf("fisica.FContactListener") >= 0 || listener.constructor != null && listener.constructor["__interfaces"] != null && listener.constructor["__interfaces"].indexOf("fisica.FContactListener") >= 0)) || listener === null)) {
                return this.setContactListener$fisica_FContactListener(listener);
            }
            else if (((listener != null && (listener["__interfaces"] != null && listener["__interfaces"].indexOf("org.jbox2d.dynamics.ContactListener") >= 0 || listener.constructor != null && listener.constructor["__interfaces"] != null && listener.constructor["__interfaces"].indexOf("org.jbox2d.dynamics.ContactListener") >= 0)) || listener === null)) {
                return this.setContactListener$org_jbox2d_dynamics_ContactListener(listener);
            }
            else
                throw new Error('invalid overload');
        };
        FWorld.prototype.setContactListener$org_jbox2d_dynamics_ContactListener = function (listener) {
            _super.prototype.setContactListener.call(this, listener);
        };
        FWorld.prototype.grabBody = function (x, y) {
            if (this.m_mouseJoint.getGrabbedBody() != null) {
                return;
            }
            var body = this.getBody$float$float$boolean(x, y, true);
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
        };
        FWorld.prototype.dragBody = function (x, y) {
            if (this.m_mouseJoint.getGrabbedBody() == null) {
                return;
            }
            var body = this.m_mouseJoint.getGrabbedBody();
            if (body.isStatic()) {
                body.setPosition$float$float(Math.fround(x - this.m_grabPositionX), Math.fround(y - this.m_grabPositionY));
            }
            else {
                this.m_mouseJoint.setTarget(x, y);
            }
        };
        FWorld.prototype.releaseBody = function () {
            if (this.m_mouseJoint.getGrabbedBody() == null) {
                return;
            }
            this.removeJoint(this.m_mouseJoint);
            this.m_mouseJoint.releaseGrabbedBody();
        };
        /**
         * This is an internal method to handle mouse interaction and should not be
         * used.
         *
         * @internal
         * @exclude
         * @param {ProcessingMouseEvent} event
         */
        FWorld.prototype.mouseEvent = function (event) {
            if (event.getAction() === ProcessingMouseEvent.PRESS && event.getButton() === this.m_mouseButton) {
                this.grabBody(event.getX(), event.getY());
            }
            if (event.getAction() === ProcessingMouseEvent.RELEASE && event.getButton() === this.m_mouseButton) {
                this.releaseBody();
            }
            if (event.getAction() === ProcessingMouseEvent.DRAG) {
                this.dragBody(event.getX(), event.getY());
            }
        };
        /**
         * Returns the mouse joint that is used for interaction with the bodies in the
         * world.
         *
         * @return {fisica.FMouseJoint} the mouse joint used for grabbing bodies
         */
        FWorld.prototype.getMouseJoint = function () {
            return this.m_mouseJoint;
        };
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
        FWorld.prototype.setGrabbable = function (value) {
            if (this.m_grabbable === value)
                return;
            this.m_grabbable = value;
            if (this.m_grabbable) {
                fisica.Fisica.parent().registerMethod("mouseEvent", this);
            }
            else {
                fisica.Fisica.parent().unregisterMethod("mouseEvent", this);
            }
        };
        FWorld.prototype.processActions = function () {
            while ((this.m_actions.length > 0)) {
                {
                    (function (a) { return a.length == 0 ? null : a.shift(); })(this.m_actions).apply(this);
                }
            }
            ;
        };
        FWorld.prototype.draw$def_processing_core_PGraphics = function (graphics) {
            this.processActions();
            for (var i = 0; i < this.m_fbodies.length; i++) {
                {
                    var fb = this.m_fbodies[i];
                    if (fb != null && fb.isDrawable())
                        fb.draw(graphics);
                }
                ;
            }
            for (var j = this.getJointList(); j != null; j = j.m_next) {
                {
                    var fj = (j.m_userData);
                    if (fj != null && fj.isDrawable())
                        fj.draw(graphics);
                }
                ;
            }
        };
        /**
         * Draws all the bodies in the world. This method is often called in the draw
         * method of the applet.
         *
         * @param {PGraphics} graphics
         * graphics to which to draw the world. Useful when trying to draw
         * the world on other buffers, such as when using createGraphics
         * @see FBody
         */
        FWorld.prototype.draw = function (graphics) {
            if (((graphics != null && graphics instanceof PGraphics) || graphics === null)) {
                return this.draw$def_processing_core_PGraphics(graphics);
            }
            else if (graphics === undefined) {
                return this.draw$();
            }
            else
                throw new Error('invalid overload');
        };
        FWorld.prototype.drawDebug$def_processing_core_PGraphics = function (graphics) {
            this.processActions();
            for (var i = 0; i < this.m_fbodies.length; i++) {
                {
                    var fb = this.m_fbodies[i];
                    if (fb != null)
                        fb.drawDebug(graphics);
                }
                ;
            }
            for (var j = this.getJointList(); j != null; j = j.m_next) {
                {
                    var fj = (j.m_userData);
                    if (fj != null)
                        fj.drawDebug(graphics);
                }
                ;
            }
        };
        /**
         * Draws the debug version of all the bodies in the world. This method is often
         * called in the draw method of the applet.
         *
         * @param {PGraphics} graphics
         * graphics to which to draw the world. Useful when trying to draw
         * the world on other buffers, such as when using createGraphics
         * @see FBody
         */
        FWorld.prototype.drawDebug = function (graphics) {
            if (((graphics != null && graphics instanceof PGraphics) || graphics === null)) {
                return this.drawDebug$def_processing_core_PGraphics(graphics);
            }
            else if (graphics === undefined) {
                return this.drawDebug$();
            }
            else
                throw new Error('invalid overload');
        };
        FWorld.prototype.draw$ = function () {
            this.draw$def_processing_core_PGraphics(fisica.Fisica.parentGraphics());
        };
        FWorld.prototype.drawDebug$ = function () {
            this.drawDebug$def_processing_core_PGraphics(fisica.Fisica.parentGraphics());
        };
        FWorld.prototype.add$fisica_FBody = function (body) {
            var action = new fisica.FAddBodyAction(body);
            /* add */ (this.m_actions.push(action) > 0);
        };
        /**
         * Add a body to the world.
         *
         * @param {fisica.FBody} body
         * body to be added to the world
         * @see #remove(FBody)
         */
        FWorld.prototype.add = function (body) {
            if (((body != null && body instanceof fisica.FBody) || body === null)) {
                return this.add$fisica_FBody(body);
            }
            else if (((body != null && body instanceof fisica.FJoint) || body === null)) {
                return this.add$fisica_FJoint(body);
            }
            else
                throw new Error('invalid overload');
        };
        FWorld.prototype.remove$fisica_FBody = function (body) {
            var action = new fisica.FRemoveBodyAction(body);
            /* add */ (this.m_actions.push(action) > 0);
        };
        /**
         * Remove a body from the world.
         *
         * @param {fisica.FBody} body
         * body to be removed from the world
         * @see #add(FBody)
         */
        FWorld.prototype.remove = function (body) {
            if (((body != null && body instanceof fisica.FBody) || body === null)) {
                return this.remove$fisica_FBody(body);
            }
            else if (((body != null && body instanceof fisica.FJoint) || body === null)) {
                return this.remove$fisica_FJoint(body);
            }
            else
                throw new Error('invalid overload');
        };
        FWorld.prototype.add$fisica_FJoint = function (joint) {
            var action = new fisica.FAddJointAction(joint);
            /* add */ (this.m_actions.push(action) > 0);
        };
        FWorld.prototype.remove$fisica_FJoint = function (joint) {
            var action = new fisica.FRemoveJointAction(joint);
            /* add */ (this.m_actions.push(action) > 0);
        };
        /**
         * Clear all bodies and joints from the world. NOT IMPLEMENTED YET.
         */
        FWorld.prototype.clear = function () {
            for (var j = this.getJointList(); j != null; j = j.m_next) {
                {
                    var fj = (j.m_userData);
                    this.remove$fisica_FJoint(fj);
                }
                ;
            }
            for (var b = this.getBodyList(); b != null; b = b.m_next) {
                {
                    var fb = (b.m_userData);
                    this.remove$fisica_FBody(fb);
                }
                ;
            }
        };
        FWorld.prototype.setEdges$float$float$float$float$int = function (topLeftX, topLeftY, bottomRightX, bottomRightY, color) {
            var height = Math.abs(Math.fround(bottomRightY - topLeftY));
            var width = Math.abs(Math.fround(bottomRightX - topLeftX));
            var ymid = Math.fround((Math.fround(topLeftY + bottomRightY)) / 2.0);
            var xmid = Math.fround((Math.fround(topLeftX + bottomRightX)) / 2.0);
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
        };
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
        FWorld.prototype.setEdges = function (topLeftX, topLeftY, bottomRightX, bottomRightY, color) {
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
        };
        FWorld.prototype.setEdges$float$float$float$float = function (topLeftX, topLeftY, bottomRightX, bottomRightY) {
            this.setEdges$float$float$float$float$int(topLeftX, topLeftY, bottomRightX, bottomRightY, fisica.Fisica.parent().color(0));
        };
        FWorld.prototype.setEdges$def_processing_core_PApplet$int = function (applet, color) {
            this.setEdges$float$float$float$float$int(0, 0, applet.width, applet.height, color);
        };
        FWorld.prototype.setEdges$int = function (color) {
            this.setEdges$def_processing_core_PApplet$int(fisica.Fisica.parent(), color);
        };
        FWorld.prototype.setEdges$ = function () {
            this.setEdges$def_processing_core_PApplet$int(fisica.Fisica.parent(), fisica.Fisica.parent().color(0));
        };
        /**
         * Set the friction of all the edges.
         *
         * @param {number} friction
         * the friction of the edges
         */
        FWorld.prototype.setEdgesFriction = function (friction) {
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
        };
        /**
         * Set the restitution of all the edges.
         *
         * @param {number} restitution
         * the restitution of the edges
         */
        FWorld.prototype.setEdgesRestitution = function (restitution) {
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
        };
        FWorld.prototype.setGravity$float$float = function (gx, gy) {
            this.setGravity$org_jbox2d_common_Vec2(fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(new org.jbox2d.common.Vec2(gx, gy)));
        };
        /**
         * Set the gravity of the world. Use {@code world.setGravity(0,0);} to have a
         * world without gravity.
         *
         * @param {number} gx
         * the horizontal component of the gravity
         * @param {number} gy
         * the vertical component of the gravity
         */
        FWorld.prototype.setGravity = function (gx, gy) {
            if (((typeof gx === 'number') || gx === null) && ((typeof gy === 'number') || gy === null)) {
                return this.setGravity$float$float(gx, gy);
            }
            else if (((gx != null && gx instanceof org.jbox2d.common.Vec2) || gx === null) && gy === undefined) {
                return this.setGravity$org_jbox2d_common_Vec2(gx);
            }
            else
                throw new Error('invalid overload');
        };
        FWorld.prototype.setGravity$org_jbox2d_common_Vec2 = function (vector) {
            _super.prototype.setGravity.call(this, vector);
        };
        FWorld.prototype.step$ = function () {
            this.step$float(Math.fround(1.0 / 60.0));
        };
        FWorld.prototype.step$float = function (dt) {
            this.step$float$int(dt, 10);
        };
        FWorld.prototype.step$float$int = function (dt, iterationCount) {
            this.processActions();
            /* clear */ (this.m_contactResults.length = 0);
            _super.prototype.step.call(this, dt, iterationCount);
        };
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
        FWorld.prototype.step = function (dt, iterationCount) {
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
        };
        FWorld.prototype.getBody$float$float = function (x, y) {
            return this.getBody$float$float$boolean(x, y, true);
        };
        FWorld.prototype.getBody$float$float$boolean = function (x, y, getStatic) {
            var bodies = this.getBodies$float$float$boolean(x, y, getStatic);
            if (bodies.length === 0)
                return null;
            return bodies[0];
        };
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
        FWorld.prototype.getBody = function (x, y, getStatic) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof getStatic === 'boolean') || getStatic === null)) {
                return this.getBody$float$float$boolean(x, y, getStatic);
            }
            else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && getStatic === undefined) {
                return this.getBody$float$float(x, y);
            }
            else
                throw new Error('invalid overload');
        };
        FWorld.prototype.getBodies$ = function () {
            var result = ([]);
            for (var b = this.getBodyList(); b != null; b = b.m_next) {
                {
                    var fb = (b.m_userData);
                    if (fb != null) {
                        /* add */ (result.push(fb) > 0);
                    }
                }
                ;
            }
            return result;
        };
        FWorld.prototype.getBodies$float$float = function (x, y) {
            return this.getBodies$float$float$boolean(x, y, true);
        };
        FWorld.prototype.getBodies$float$float$boolean = function (x, y, getStatic) {
            return this.getBodies$float$float$boolean$int(x, y, getStatic, 10);
        };
        FWorld.prototype.getBodies$float$float$boolean$int = function (x, y, getStatic, count) {
            var p = fisica.Fisica.screenToWorld$float$float(x, y);
            this.m_aabb.lowerBound.set(p);
            this.m_aabb.lowerBound.subLocal(this.m_small);
            this.m_aabb.upperBound.set(p);
            this.m_aabb.upperBound.addLocal(this.m_small);
            var shapes = this.query(this.m_aabb, count);
            var result = ([]);
            if (shapes == null)
                return result;
            for (var j = 0; j < shapes.length; j++) {
                {
                    var shapeBody = shapes[j].getBody();
                    if (shapeBody.isStatic() === false || getStatic) {
                        var inside = shapes[j].testPoint(shapeBody.getMemberXForm(), p);
                        if (inside) {
                            /* add */ (result.push((shapeBody.getUserData())) > 0);
                        }
                    }
                }
                ;
            }
            return result;
        };
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
        FWorld.prototype.getBodies = function (x, y, getStatic, count) {
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
        };
        FWorld.prototype.raycast$float$float$float$float$fisica_FBody_A$int$boolean = function (x1, y1, x2, y2, bodies, maxCount, solidShapes) {
            var segment = new org.jbox2d.collision.Segment();
            segment.p1.set(fisica.Fisica.screenToWorld$float$float(x1, y1));
            segment.p2.set(fisica.Fisica.screenToWorld$float$float(x2, y2));
            var results = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(maxCount);
            var shapes = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(maxCount);
            var count = this.raycast$org_jbox2d_collision_Segment$org_jbox2d_collision_shapes_Shape_A$int$boolean$java_lang_Object(segment, shapes, maxCount, solidShapes, null);
            for (var i = 0; i < count; ++i) {
                {
                    var shape = shapes[i];
                    var shapeBody = shape.getBody();
                    results[i] = (shapeBody.getUserData());
                }
                ;
            }
            return count;
        };
        FWorld.prototype.raycast = function (x1, y1, x2, y2, bodies, maxCount, solidShapes) {
            if (((typeof x1 === 'number') || x1 === null) && ((typeof y1 === 'number') || y1 === null) && ((typeof x2 === 'number') || x2 === null) && ((typeof y2 === 'number') || y2 === null) && ((bodies != null && bodies instanceof Array && (bodies.length == 0 || bodies[0] == null || (bodies[0] != null && bodies[0] instanceof fisica.FBody))) || bodies === null) && ((typeof maxCount === 'number') || maxCount === null) && ((typeof solidShapes === 'boolean') || solidShapes === null)) {
                return this.raycast$float$float$float$float$fisica_FBody_A$int$boolean(x1, y1, x2, y2, bodies, maxCount, solidShapes);
            }
            else if (((x1 != null && x1 instanceof org.jbox2d.collision.Segment) || x1 === null) && ((y1 != null && y1 instanceof Array && (y1.length == 0 || y1[0] == null || (y1[0] != null && y1[0] instanceof org.jbox2d.collision.shapes.Shape))) || y1 === null) && ((typeof x2 === 'number') || x2 === null) && ((typeof y2 === 'boolean') || y2 === null) && ((bodies != null) || bodies === null) && maxCount === undefined && solidShapes === undefined) {
                return this.raycast$org_jbox2d_collision_Segment$org_jbox2d_collision_shapes_Shape_A$int$boolean$java_lang_Object(x1, y1, x2, y2, bodies);
            }
            else
                throw new Error('invalid overload');
        };
        FWorld.prototype.raycast$org_jbox2d_collision_Segment$org_jbox2d_collision_shapes_Shape_A$int$boolean$java_lang_Object = function (segment, shapes, maxCount, solidShapes, userData) {
            return _super.prototype.raycast.call(this, segment, shapes, maxCount, solidShapes, userData);
        };
        FWorld.prototype.raycastOne$org_jbox2d_collision_Segment$org_jbox2d_common_RaycastResult$boolean$java_lang_Object = function (segment, result, solidShapes, userData) {
            return _super.prototype.raycastOne.call(this, segment, result, solidShapes, userData);
        };
        FWorld.prototype.raycastOne$float$float$float$float$fisica_FRaycastResult$boolean = function (x1, y1, x2, y2, result, solidShapes) {
            var segment = new org.jbox2d.collision.Segment();
            segment.p1.set(fisica.Fisica.screenToWorld$float$float(x1, y1));
            segment.p2.set(fisica.Fisica.screenToWorld$float$float(x2, y2));
            var maxCount = 1;
            var shapes = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(maxCount);
            var count = this.raycast$org_jbox2d_collision_Segment$org_jbox2d_collision_shapes_Shape_A$int$boolean$java_lang_Object(segment, shapes, maxCount, solidShapes, null);
            if (count === 0)
                return null;
            var temp = new org.jbox2d.common.RaycastResult();
            shapes[0].testSegment(shapes[0].getBody().getMemberXForm(), temp, segment, 1.0);
            result.set(x1, y1, x2, y2, temp);
            return (shapes[0].getBody().getUserData());
        };
        FWorld.prototype.raycastOne = function (x1, y1, x2, y2, result, solidShapes) {
            if (((typeof x1 === 'number') || x1 === null) && ((typeof y1 === 'number') || y1 === null) && ((typeof x2 === 'number') || x2 === null) && ((typeof y2 === 'number') || y2 === null) && ((result != null && result instanceof fisica.FRaycastResult) || result === null) && ((typeof solidShapes === 'boolean') || solidShapes === null)) {
                return this.raycastOne$float$float$float$float$fisica_FRaycastResult$boolean(x1, y1, x2, y2, result, solidShapes);
            }
            else if (((x1 != null && x1 instanceof org.jbox2d.collision.Segment) || x1 === null) && ((y1 != null && y1 instanceof org.jbox2d.common.RaycastResult) || y1 === null) && ((typeof x2 === 'boolean') || x2 === null) && ((y2 != null) || y2 === null) && result === undefined && solidShapes === undefined) {
                return this.raycastOne$org_jbox2d_collision_Segment$org_jbox2d_common_RaycastResult$boolean$java_lang_Object(x1, y1, x2, y2);
            }
            else
                throw new Error('invalid overload');
        };
        return FWorld;
    }(org.jbox2d.dynamics.World));
    fisica.FWorld = FWorld;
    FWorld["__class"] = "fisica.FWorld";
    (function (FWorld) {
        /**
         * Forward the contact events to the contactStarted(ContactPoint point),
         * contactPersisted(ContactPoint point) and contactStopped(ContactPoint point)
         * which may be implemented in the sketch.
         * @class
         */
        var ConcreteContactListener = (function () {
            function ConcreteContactListener(__parent) {
                this.__parent = __parent;
                if (this.m_world === undefined)
                    this.m_world = null;
            }
            ConcreteContactListener.prototype.add = function (point) {
                var contact = new fisica.FContact(point);
                /* put */ (function (m, k, v) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
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
            };
            ConcreteContactListener.prototype.persist = function (point) {
                var contact = new fisica.FContact(point);
                /* put */ (function (m, k, v) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
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
            };
            ConcreteContactListener.prototype.remove = function (point) {
                var contact = new fisica.FContact(point);
                /* remove */ (function (m, k) { if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
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
            };
            ConcreteContactListener.prototype.result = function (point) {
                var result = new fisica.FContactResult(point);
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
            };
            return ConcreteContactListener;
        }());
        FWorld.ConcreteContactListener = ConcreteContactListener;
        ConcreteContactListener["__class"] = "fisica.FWorld.ConcreteContactListener";
        ConcreteContactListener["__interfaces"] = ["org.jbox2d.dynamics.ContactListener"];
    })(FWorld = fisica.FWorld || (fisica.FWorld = {}));
})(fisica || (fisica = {}));
(function (fisica) {
    var FWorldAction = (function () {
        function FWorldAction() {
        }
        return FWorldAction;
    }());
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
    var FBody = (function (_super) {
        __extends(FBody, _super);
        function FBody() {
            var _this = _super.call(this) || this;
            _this.m_density = 1.0;
            _this.m_restitution = 0.1;
            _this.m_friction = 0.1;
            _this.m_bullet = false;
            _this.m_sensor = false;
            _this.m_static = false;
            _this.m_linearDamping = 0.5;
            _this.m_angularDamping = 0.5;
            _this.m_rotatable = true;
            _this.m_allowSleep = true;
            _this.m_isSleeping = false;
            _this.m_groupIndex = 0;
            _this.m_filterBits = 65535;
            _this.m_categoryBits = 1;
            _this.m_linearVelocity = new org.jbox2d.common.Vec2(0.0, 0.0);
            _this.m_angularVelocity = 0.0;
            _this.m_force = new org.jbox2d.common.Vec2(0.0, 0.0);
            _this.m_torque = 0.0;
            _this.m_position = new org.jbox2d.common.Vec2(0.0, 0.0);
            _this.m_angle = 0.0;
            _this.m_grabbable = true;
            _this.m_shape = null;
            if (_this.m_name === undefined)
                _this.m_name = null;
            if (_this.m_body === undefined)
                _this.m_body = null;
            if (_this.m_world === undefined)
                _this.m_world = null;
            if (_this.m_parent === undefined)
                _this.m_parent = null;
            return _this;
        }
        FBody.prototype.processBody = function (bd, sd) {
            this.m_shape = bd.createShape(sd);
            this.m_shape.m_userData = this;
        };
        /**
         * WARNING: This method is internal only and may change someday.  If you are using this method please contact the developer since there should be a better way or we may add something to the library.
         *
         * @return {org.jbox2d.dynamics.Body} the internal JBox2D body
         */
        FBody.prototype.getBox2dBody = function () {
            return this.m_body;
        };
        /**
         * Get the group to which this body belongs.  Groups allow to select the bodies that may collide together or with others.  If the group index is negative then they will not collide with each other but they will collide with all the bodies of the other groups.
         *
         * @return {number} the index of the group
         */
        FBody.prototype.getGroupIndex = function () {
            return this.m_groupIndex;
        };
        FBody.prototype.addToWorld = function (world) {
            var bd = new org.jbox2d.dynamics.BodyDef();
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
            var sd = this.getProcessedShapeDef();
            if (sd != null) {
                this.processBody(this.m_body, sd);
            }
            var bodies = this.getBodies();
            var sds = this.getShapeDefs();
            if (sds.length !== bodies.length) {
                for (var i = 0; i < sds.length; i++) {
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
                for (var i = 0; i < sds.length; i++) {
                    {
                        var b = (bodies[i]);
                        sd = (sds[i]);
                        if (sd != null) {
                            b.processBody(this.m_body, sd);
                        }
                    }
                    ;
                }
            }
            this.updateMass();
        };
        FBody.prototype.setState = function (b) {
            if (b == null || b.m_body == null) {
                return;
            }
            this.m_linearVelocity = b.m_body.getLinearVelocity();
            this.m_angularVelocity = b.m_body.getAngularVelocity();
            this.m_position = b.m_body.getMemberXForm().position;
            this.m_angle = b.m_body.getAngle();
            this.m_force = b.m_body.m_force;
            this.m_torque = b.m_body.m_torque;
        };
        FBody.prototype.setStateFromWorld = function () {
            if (this.m_body == null) {
                return;
            }
            this.m_linearVelocity = this.m_body.getLinearVelocity();
            this.m_angularVelocity = this.m_body.getAngularVelocity();
            this.m_position = this.m_body.getMemberXForm().position;
            this.m_angle = this.m_body.getAngle();
            this.m_force = this.m_body.m_force;
            this.m_torque = this.m_body.m_torque;
        };
        FBody.prototype.recreateInWorld = function () {
            if (this.m_body == null)
                return;
            this.setStateFromWorld();
            this.m_world.remove$fisica_FBody(this);
            this.m_world.add$fisica_FBody(this);
        };
        FBody.prototype.removeFromWorld = function () {
            if (this.m_body == null)
                return;
            this.m_world.destroyBody(this.m_body);
            this.m_body = null;
            this.m_world = null;
        };
        FBody.prototype.getShapeDef = function () {
            return null;
        };
        FBody.prototype.getTransformedShapeDef = function () {
            return this.getShapeDef();
        };
        FBody.prototype.getProcessedShapeDef = function () {
            var sd = this.getShapeDef();
            if (sd != null) {
                sd.isSensor = this.m_sensor;
                sd.filter.groupIndex = this.m_groupIndex;
                sd.filter.maskBits = this.m_filterBits;
                sd.filter.categoryBits = this.m_categoryBits;
            }
            return sd;
        };
        FBody.prototype.getShapeDefs = function () {
            return ([]);
        };
        FBody.prototype.getBodies = function () {
            return ([]);
        };
        FBody.prototype.processShapeDef = function (sd) {
            if (sd != null) {
                sd.isSensor = this.m_sensor;
                sd.filter.groupIndex = this.m_groupIndex;
                sd.filter.maskBits = this.m_filterBits;
                sd.filter.categoryBits = this.m_categoryBits;
            }
            return sd;
        };
        FBody.prototype.preDraw = function (applet) {
            applet.pushStyle();
            applet.pushMatrix();
            this.applyMatrix(applet);
            applet.ellipseMode(PConstants.CENTER);
            applet.rectMode(PConstants.CENTER);
            this.appletFillStroke(applet);
        };
        FBody.prototype.postDraw = function (applet) {
            applet.popMatrix();
            applet.popStyle();
        };
        FBody.prototype.preDrawDebug = function (applet) {
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
        };
        FBody.prototype.postDrawDebug = function (applet) {
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
                var aabb = this.getAABB();
                var lower = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(aabb.lowerBound);
                var upper = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(aabb.upperBound);
                applet.rect(lower.x, lower.y, upper.x, upper.y);
                applet.popStyle();
                applet.pushMatrix();
                var cent = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.getBox2dBody().getWorldCenter());
                applet.translate(cent.x, cent.y);
                applet.pushStyle();
                applet.noStroke();
                applet.rect(0, 0, 3, 3);
                applet.popStyle();
                applet.popMatrix();
                var infobox = "";
                var df = new Object();
                df.setMaximumFractionDigits(1);
                var bb = this.getBB();
                var dim = new org.jbox2d.common.Vec2(bb.upperBound);
                dim = dim.sub(bb.lowerBound);
                var width = dim.x;
                var height = dim.y;
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
                    var m = this.getMass();
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
        };
        FBody.prototype.getAABB = function () {
            var result = new org.jbox2d.collision.AABB();
            var first = true;
            var b = this.getBox2dBody();
            if (b == null) {
                return result;
            }
            var temp = new org.jbox2d.collision.AABB();
            var tempXForm = b.getXForm();
            if (b != null) {
                var ss = b.getShapeList();
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
        };
        FBody.prototype.getBB = function () {
            var result = new org.jbox2d.collision.AABB();
            var first = true;
            var b = this.getBox2dBody();
            if (b == null) {
                return result;
            }
            var temp = new org.jbox2d.collision.AABB();
            var tempXForm = b.getXForm();
            tempXForm.setIdentity();
            if (b != null) {
                var ss = b.getShapeList();
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
        };
        FBody.prototype.applyMatrix = function (applet) {
            applet.translate(this.getX(), this.getY());
            applet.rotate(this.getRotation());
        };
        /**
         * Control the group to which this body belongs.  Groups allow to select the bodies that may collide together or with others.  If the group index is negative then they will not collide with each other but they will collide with all the bodies of the other groups.
         *
         * @param {number} index  the index of the group
         */
        FBody.prototype.setGroupIndex = function (index) {
            this.m_groupIndex = index;
            this.recreateInWorld();
        };
        FBody.prototype.setFilterBits = function (mask) {
            this.m_filterBits = mask;
            this.recreateInWorld();
        };
        FBody.prototype.setCategoryBits = function (mask) {
            this.m_categoryBits = mask;
            this.recreateInWorld();
        };
        FBody.prototype.getCategoryBits = function () {
            return this.m_categoryBits;
        };
        FBody.prototype.getFilterBits = function () {
            return this.m_filterBits;
        };
        FBody.prototype.setParent = function (b) {
            this.m_parent = b;
        };
        FBody.prototype.getParent = function () {
            return this.m_parent;
        };
        /**
         * Control if this body can be grabbed by the mouse, when clicked on.  This property only has effect if the world is grabbable. If a body is grabbable, then it can be dragged around by the mouse.
         *
         * @see FWorld#setGrabbable(boolean)
         *
         * @param {boolean} value if {@code true} and the world it belongs to is grabbable, then the body is grabbable by the mouse
         */
        FBody.prototype.setGrabbable = function (value) {
            this.m_grabbable = value;
        };
        /**
         * Set the force applied to the center of the body.
         *
         * @see #addForce(float,float)
         *
         * @param {number} fx the x coordinate of the force
         * @param {number} fy the y coordinate of the force
         */
        FBody.prototype.setForce = function (fx, fy) {
            this.resetForces();
            this.addForce$float$float(fisica.Fisica.screenToWorld$float(fx), fisica.Fisica.screenToWorld$float(fy));
        };
        /**
         * Get the x coordinate of the force applied to the center of the body.
         *
         * @see #addForce(float,float)
         * @see #getForceY()
         *
         * @return {number} the x coordinate of the force
         */
        FBody.prototype.getForceX = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_force).x;
        };
        /**
         * Get the y coordinate of the force applied to the center of the body.
         *
         * @see #addForce(float,float)
         * @see #getForceX()
         *
         * @return {number} the y coordinate of the force
         */
        FBody.prototype.getForceY = function () {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_force).y;
        };
        /**
         * Add a rotation force (a torque) to the body.
         *
         * @see #addForce(float,float)
         * @see #addForce(float,float,float,float)
         *
         * @param {number} torque the value of the torque
         */
        FBody.prototype.addTorque = function (torque) {
            if (this.m_body != null) {
                this.m_body.applyTorque(torque);
            }
            this.m_torque += torque;
        };
        FBody.prototype.addForce$float$float = function (fx, fy) {
            if (this.m_body != null) {
                this.m_body.applyForce(fisica.Fisica.screenToWorld$float$float(fx, fy), this.m_body.getWorldCenter());
            }
            this.m_force.x += fisica.Fisica.screenToWorld$float(fx);
            this.m_force.y += fisica.Fisica.screenToWorld$float(fy);
        };
        FBody.prototype.addImpulse$float$float = function (fx, fy) {
            if (this.m_body != null) {
                this.m_body.applyImpulse(fisica.Fisica.screenToWorld$float$float(fx, fy), this.m_body.getWorldCenter());
            }
            this.m_force.x += fisica.Fisica.screenToWorld$float(fx);
            this.m_force.y += fisica.Fisica.screenToWorld$float(fy);
        };
        FBody.prototype.addForce$float$float$float$float = function (fx, fy, px, py) {
            if (this.m_body != null) {
                this.m_body.applyForce(fisica.Fisica.screenToWorld$float$float(fx, fy), this.m_body.getWorldCenter().add(fisica.Fisica.screenToWorld$float$float(px, py)));
            }
        };
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
        FBody.prototype.addForce = function (fx, fy, px, py) {
            if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && ((typeof px === 'number') || px === null) && ((typeof py === 'number') || py === null)) {
                return this.addForce$float$float$float$float(fx, fy, px, py);
            }
            else if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && px === undefined && py === undefined) {
                return this.addForce$float$float(fx, fy);
            }
            else
                throw new Error('invalid overload');
        };
        FBody.prototype.addImpulse$float$float$float$float = function (fx, fy, px, py) {
            if (this.m_body != null) {
                this.m_body.applyImpulse(fisica.Fisica.screenToWorld$float$float(fx, fy), this.m_body.getWorldCenter().add(fisica.Fisica.screenToWorld$float$float(px, py)));
            }
        };
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
        FBody.prototype.addImpulse = function (fx, fy, px, py) {
            if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && ((typeof px === 'number') || px === null) && ((typeof py === 'number') || py === null)) {
                return this.addImpulse$float$float$float$float(fx, fy, px, py);
            }
            else if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && px === undefined && py === undefined) {
                return this.addImpulse$float$float(fx, fy);
            }
            else
                throw new Error('invalid overload');
        };
        /**
         * Remove all the forces that are applied to the body.
         */
        FBody.prototype.resetForces = function () {
            if (this.m_body != null) {
                this.m_body.m_force.setZero();
                this.m_body.m_torque = 0.0;
            }
            this.m_force.setZero();
            this.m_torque = 0.0;
        };
        /**
         * Returns the horizontal velocity of the body.
         *
         * @return {number} the horizontal velocity of the body in pixels per second
         */
        FBody.prototype.getVelocityX = function () {
            if (this.m_body != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_body.getLinearVelocity()).x;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_linearVelocity).x;
        };
        /**
         * Returns the vertical velocity of the body.
         *
         * @return {number} the vertical velocity of the body in pixels per second
         */
        FBody.prototype.getVelocityY = function () {
            if (this.m_body != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_body.getLinearVelocity()).y;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_linearVelocity).y;
        };
        /**
         * Set the velocity of the body.
         *
         * @param {number} vx  the horizontal velocity of the body in pixels per second
         * @param {number} vy  the vertical velocity of the body in pixels per second
         */
        FBody.prototype.setVelocity = function (vx, vy) {
            if (this.m_body != null) {
                this.m_body.setLinearVelocity(fisica.Fisica.screenToWorld$float$float(vx, vy));
                this.m_body.wakeUp();
            }
            this.m_linearVelocity = fisica.Fisica.screenToWorld$float$float(vx, vy);
        };
        /**
         * Adjust the velocity of the body.
         *
         * @param {number} dvx  the horizontal velocity to be added to the body in pixels per second
         * @param {number} dvy  the vertical velocity to be added to the body in pixels per second
         */
        FBody.prototype.adjustVelocity = function (dvx, dvy) {
            if (this.m_body != null) {
                this.m_body.setLinearVelocity(fisica.Fisica.screenToWorld$float$float(Math.fround(this.getVelocityX() + dvx), Math.fround(this.getVelocityY() + dvy)));
                this.m_body.wakeUp();
            }
            this.m_linearVelocity = fisica.Fisica.screenToWorld$float$float(Math.fround(this.getVelocityX() + dvx), Math.fround(this.getVelocityY() + dvy));
        };
        /**
         * Returns the horizontal position of the body.
         *
         * @return {number} the horizontal position of the body in pixels
         * @see #getY
         * @see #setPosition(float,float)
         */
        FBody.prototype.getX = function () {
            if (this.m_body != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_body.getMemberXForm().position).x;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).x;
        };
        /**
         * Returns the vertical position of the body.
         *
         * @return {number} the vertical position of the body in pixels
         * @see #getX
         * @see #setPosition(float,float)
         */
        FBody.prototype.getY = function () {
            if (this.m_body != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_body.getMemberXForm().position).y;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_position).y;
        };
        FBody.prototype.setPosition$float$float = function (x, y) {
            if (this.m_body != null) {
                this.m_body.setXForm(fisica.Fisica.screenToWorld$float$float(x, y), this.m_body.getAngle());
            }
            this.m_position = fisica.Fisica.screenToWorld$float$float(x, y);
        };
        /**
         * Set the position of the body.
         *
         * @param {number} x  the horizontal position of the body in pixels
         * @param {number} y  the vertical position of the body in pixels
         */
        FBody.prototype.setPosition = function (x, y) {
            if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                return this.setPosition$float$float(x, y);
            }
            else if (((x != null && x instanceof org.jbox2d.common.Vec2) || x === null) && y === undefined) {
                return this.setPosition$org_jbox2d_common_Vec2(x);
            }
            else
                throw new Error('invalid overload');
        };
        FBody.prototype.setPosition$org_jbox2d_common_Vec2 = function (position) {
            if (this.m_body != null) {
                this.m_body.setXForm(position, this.m_body.getAngle());
            }
            this.m_position = fisica.Fisica.screenToWorld$org_jbox2d_common_Vec2(position);
        };
        /**
         * Adjust the position of the body.
         *
         * @param {number} dx  the horizontal position to be added to the body in pixels
         * @param {number} dy  the vertical position to be added to the body in pixels
         */
        FBody.prototype.adjustPosition = function (dx, dy) {
            if (this.m_body != null) {
                this.m_body.setXForm(fisica.Fisica.screenToWorld$float$float(Math.fround(this.getX() + dx), Math.fround(this.getY() + dy)), this.m_body.getAngle());
            }
            this.m_position = fisica.Fisica.screenToWorld$float$float(Math.fround(this.getX() + dx), Math.fround(this.getY() + dy));
        };
        /**
         * Returns the rotation of the body.
         *
         * @return {number} the rotation of the body in radians
         * @see #setRotation(float)
         */
        FBody.prototype.getRotation = function () {
            if (this.m_body != null) {
                return this.m_body.getAngle();
            }
            return this.m_angle;
        };
        /**
         * Set the rotation of the body.
         *
         * @param {number} w  the rotation of the body in radians
         * @see #getRotation()
         */
        FBody.prototype.setRotation = function (w) {
            if (this.m_body != null) {
                this.m_body.setXForm(this.m_body.getMemberXForm().position, w);
            }
            this.m_angle = w;
        };
        /**
         * Adjust the rotation of the body.
         *
         * @param {number} dw  the rotation to be added to the body in radians
         * @see #getRotation()
         * @see #setRotation(float)
         */
        FBody.prototype.adjustRotation = function (dw) {
            if (this.m_body != null) {
                this.m_body.setXForm(this.m_body.getMemberXForm().position, Math.fround(this.m_body.getAngle() + dw));
            }
            this.m_angle += dw;
        };
        /**
         * Deprecated. Please use isSleeping().
         *
         * @return {boolean} true if the body is resting
         */
        FBody.prototype.isResting = function () {
            return this.isSleeping();
        };
        /**
         * Indicates whether the body is in a sleeping state.
         *
         * The sleeping state of a body is reached when it has not moved or has not received any forces nor collisions for some time.
         *
         * @return {boolean} true if the body is sleeping
         * @see #wakeUp()
         * @see #setAllowSleeping(boolean)
         */
        FBody.prototype.isSleeping = function () {
            if (this.m_body != null) {
                return this.m_body.isSleeping();
            }
            return this.m_isSleeping;
        };
        /**
         * Wake up the body from a sleeping state.
         *
         * @see #isSleeping()
         * @see #setAllowSleeping(boolean)
         */
        FBody.prototype.wakeUp = function () {
            if (this.m_body == null) {
                return;
            }
            this.m_body.wakeUp();
        };
        /**
         * Returns the rotation velocity of the body.
         *
         * @return {number} the rotation velocity of the body in radians per second
         * @see #setAngularVelocity(float)
         * @see #adjustAngularVelocity(float)
         */
        FBody.prototype.getAngularVelocity = function () {
            if (this.m_body != null) {
                return this.m_body.getAngularVelocity();
            }
            return this.m_angularVelocity;
        };
        /**
         * Set the rotation velocity of the body.
         *
         * @param {number} w   the rotation velocity of the body in radians per second
         */
        FBody.prototype.setAngularVelocity = function (w) {
            if (this.m_body != null) {
                this.m_body.setAngularVelocity(w);
                this.m_body.wakeUp();
            }
            this.m_angularVelocity = w;
        };
        /**
         * Adjust the rotation velocity of the body.
         *
         * @param {number} dw   the rotation velocity to be added to the body in radians per second
         * @see #getAngularVelocity()
         * @see #setAngularVelocity(float)
         */
        FBody.prototype.adjustAngularVelocity = function (dw) {
            if (this.m_body != null) {
                this.m_body.setAngularVelocity(Math.fround(this.m_body.getAngularVelocity() + dw));
                this.m_body.wakeUp();
            }
            this.m_angularVelocity += dw;
        };
        /**
         * Set the damping of the rotation movement of the body.  The damping constantly reduces the rotation velocity of the body.
         *
         * @param {number} damping   the damping of the rotation movement of the body
         * @see #setDamping(float)
         */
        FBody.prototype.setAngularDamping = function (damping) {
            if (this.m_body != null) {
                this.m_body.m_angularDamping = damping;
            }
            this.m_angularDamping = damping;
        };
        /**
         * Set the damping of the translation movement of the body.  The damping constantly reduces the translation velocity of the body.
         *
         * @param {number} damping   the damping of the translation movement of the body
         * @see #setAngularDamping(float)
         */
        FBody.prototype.setDamping = function (damping) {
            if (this.m_body != null) {
                this.m_body.m_linearDamping = damping;
            }
            this.m_linearDamping = damping;
        };
        /**
         * Set the name of the body.
         *
         * @param {string} name   the name of the body
         */
        FBody.prototype.setName = function (name) {
            this.m_name = name;
        };
        /**
         * Get the name of the body.
         *
         * @return {string} name    the name of the body
         */
        FBody.prototype.getName = function () {
            return this.m_name;
        };
        /**
         * Set the density of the body.  The density will determine the total mass of the body and thus it's behavior with respect to collisions, bounces, inertia, joints,...  When the density is set, the mass of the body is recalculated automatically given it's area.
         *
         * Note that a density of 0.0 corresponds to a mass of 0.0 independently of the area and the body will be considered static.
         *
         * @param {number} density   the density of the body
         */
        FBody.prototype.setDensity = function (density) {
            this.m_density = density;
            this.updateMass();
        };
        /**
         * Get the density of the body.  The density determines the total mass of the body and thus it's behavior with respect to collisions, bounces, inertia, joints,...
         *
         * Note that a density of 0.0 corresponds to a mass of 0.0 independently of the area and the body will be considered static.
         *
         * @return {number} density   the density of the body
         */
        FBody.prototype.getDensity = function () {
            return this.m_density;
        };
        FBody.prototype.updateMass = function () {
            if (this.m_body == null) {
                return;
            }
            for (var s = this.m_body.getShapeList(); s != null; s = s.m_next) {
                {
                    s.m_density = this.m_static ? 0.0 : this.m_density;
                }
                ;
            }
            this.m_body.setMassFromShapes();
        };
        /**
         * Set whether the body is a sensor.  Sensor bodies act as normal bodies in the sense that they notify about contacts, however they do not collide with other bodies (they act like ghost bodies).
         *
         * @param {boolean} value   if {@code true} the body will be a sensor.  It will not collide when enters contact with other bodies
         */
        FBody.prototype.setSensor = function (value) {
            if (this.m_body != null) {
                for (var s = this.m_body.getShapeList(); s != null; s = s.m_next) {
                    {
                        s.m_isSensor = value;
                    }
                    ;
                }
            }
            this.m_sensor = value;
        };
        /**
         * Returns whether the body is a sensor.  Sensor bodies act as normal bodies in the sense that they notify about contacts, however they do not collide with other bodies (they act like ghost bodies).
         *
         * @return   {boolean} if {@code true} the body is a sensor.  It will not collide when enters contact with other bodies
         */
        FBody.prototype.isSensor = function () {
            return this.m_sensor;
        };
        /**
         * Set whether the body is static.  Static bodies do not move or rotate, unless done manually using {@link #setPosition(float,float) setPosition} or {@link #setRotation(float) setRotation}.
         *
         * @param {boolean} value   if {@code true} the body will be static
         */
        FBody.prototype.setStaticBody = function (value) {
            this.setStatic(value);
        };
        /**
         * Set whether the body is static.  Static bodies do not move or rotate, unless done manually using {@link #setPosition(float,float) setPosition} or {@link #setRotation(float) setRotation}.
         *
         * @param {boolean} value   if {@code true} the body will be static
         */
        FBody.prototype.setStatic = function (value) {
            if (this.m_body != null) {
                this.m_body.m_type = value ? org.jbox2d.dynamics.Body.e_staticType : org.jbox2d.dynamics.Body.e_dynamicType;
            }
            this.m_static = value;
            this.updateMass();
        };
        /**
         * Returns the mass of the body.  Static bodies or bodies not added to the world return 0.
         *
         * @return   {number} the mass of the body or 0 if static
         */
        FBody.prototype.getMass = function () {
            if (this.m_body != null) {
                return this.m_body.getMass();
            }
            return 0.0;
        };
        /**
         * Returns whether the body is static.  Static bodies do not move or rotate, unless done manually using {@link #setPosition(float,float) setPosition} or {@link #setRotation(float) setRotation}.
         *
         * @return   {boolean} if {@code true} the body is static
         */
        FBody.prototype.isStatic = function () {
            if (this.m_body != null) {
                return this.m_body.isStatic();
            }
            return this.m_static;
        };
        /**
         * Set whether the body is a bullet.  Bullet bodies are computationally more expensive but more accurate in their movement.  Use this only with fast objects.
         *
         * @param {boolean} value   if {@code true} the body will be a bullet
         */
        FBody.prototype.setBullet = function (value) {
            if (this.m_body != null) {
                this.m_body.setBullet(value);
            }
            this.m_bullet = value;
        };
        /**
         * Set the restitution of the body.  The restitution determines the ratio of the reaction force normal to a contact, when the body collides with another body.  Basically it can be seen as a coefficient that will control the strength with which the body bounces back from a collision.  The resititution of a contact of two bodies in a collision is calculated as the maximum of the restitution values of the 2 bodies involved.
         *
         * @param {number} restitution   a positive value.  A value of 0 means no bounce after a collision, and a value of 1 means bounce with it's full speed from a collision
         */
        FBody.prototype.setRestitution = function (restitution) {
            if (this.m_body != null) {
                for (var s = this.m_body.getShapeList(); s != null; s = s.m_next) {
                    {
                        s.setRestitution(restitution);
                    }
                    ;
                }
            }
            this.m_restitution = restitution;
        };
        /**
         * Set the friction of the body.  The friction determines the ratio of the reaction force tangent to a contact, when the body collides with another body.  Basically it can be seen as a coefficient that will control how the body gets slown down when the body slides against another body.  The friction of a contact of two bodies in a collision is calculated from the friction values of the 2 bodies involved.
         *
         * @param {number} friction   a positive value.  A value of 0 means no friction and thus the body will not be slown down if no other forces are applied
         */
        FBody.prototype.setFriction = function (friction) {
            if (this.m_body != null) {
                for (var s = this.m_body.getShapeList(); s != null; s = s.m_next) {
                    {
                        s.setFriction(friction);
                    }
                    ;
                }
            }
            this.m_friction = friction;
        };
        /**
         * Set whether the body can rotate.
         *
         * @param {boolean} rotatable   if {@code true} the body will not rotate
         */
        FBody.prototype.setRotatable = function (rotatable) {
            if (this.m_body != null) {
                if (rotatable) {
                    this.m_body.m_flags &= ~org.jbox2d.dynamics.Body.e_fixedRotationFlag;
                }
                else {
                    this.m_body.m_flags |= org.jbox2d.dynamics.Body.e_fixedRotationFlag;
                }
            }
            this.m_rotatable = rotatable;
        };
        /**
         * Set whether the body can sleep.
         *
         * @param {boolean} allowSleep if {@code true} the body will be able to sleep
         */
        FBody.prototype.setAllowSleeping = function (allowSleep) {
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
        };
        /**
         * Return a list of bodies currently touching the body.
         *
         * @return   {Array} list of bodies (ArrayList of FBody) touching the body
         */
        FBody.prototype.getTouching = function () {
            var result = ([]);
            if (this.m_world == null) {
                return result;
            }
            var contacts = (function (m) { var r = []; if (m.entries == null)
                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                r.push(m.entries[i].value); return r; })(this.m_world.m_contacts);
            var iter = (function (a) { var i = 0; return { next: function () { return i < a.length ? a[i++] : null; }, hasNext: function () { return i < a.length; } }; })(contacts);
            while ((iter.hasNext())) {
                {
                    var contact = iter.next();
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
        };
        /**
         * Return a list of contacts currently involving the body.
         *
         * @return   {Array} list of contacts (ArrayList of FContact) touching the body
         */
        FBody.prototype.getContacts = function () {
            var result = ([]);
            if (this.m_world == null) {
                return result;
            }
            var contacts = (function (m) { var r = []; if (m.entries == null)
                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                r.push(m.entries[i].value); return r; })(this.m_world.m_contacts);
            var iter = (function (a) { var i = 0; return { next: function () { return i < a.length ? a[i++] : null; }, hasNext: function () { return i < a.length; } }; })(contacts);
            while ((iter.hasNext())) {
                {
                    var contact = iter.next();
                    if (this === contact.getBody1() || this === contact.getBody2()) {
                        /* add */ (result.push(contact) > 0);
                    }
                }
            }
            ;
            return result;
        };
        /**
         * Returns a list with all the joints with a connection to the body
         *
         * @return    {Array} an ArrayList (of FJoint) connected to the body
         */
        FBody.prototype.getJoints = function () {
            var result = ([]);
            if (this.m_body != null) {
                for (var jn = this.m_body.getJointList(); jn != null; jn = jn.next) {
                    {
                        var j = (jn.joint.m_userData);
                        if (j != null) {
                            /* add */ (result.push(j) > 0);
                        }
                    }
                    ;
                }
            }
            return result;
        };
        /**
         * Returns true if the body is joint to the body passed as argument
         *
         * @param {fisica.FBody} other  the other body
         * @return     {boolean} if {@code true} the body is connected to other
         */
        FBody.prototype.isConnected = function (other) {
            if (this.m_body != null) {
                for (var jn = this.m_body.getJointList(); jn != null; jn = jn.next) {
                    {
                        var b = (jn.other.m_userData);
                        if (jn.other.m_userData === other) {
                            return (jn.joint.m_collideConnected === false);
                        }
                    }
                    ;
                }
            }
            return false;
        };
        /**
         * Return whether the body is currently touching the body passed as argument.
         *
         * @param {fisica.FBody} b  the body for which we want to know if there is contact
         * @return   {boolean} if {@code true} the body is touching b
         */
        FBody.prototype.isTouchingBody = function (b) {
            return (this.getTouching().indexOf((b)) >= 0);
        };
        FBody.prototype.getLocalWorldPoint = function (p) {
            if (this.m_body != null) {
                var v = this.m_body.getLocalPoint(p);
                return v;
            }
            var xf = new org.jbox2d.common.XForm();
            xf.position.set(fisica.Fisica.screenToWorld$float$float(this.getX(), this.getY()));
            xf.R.set(this.getRotation());
            return org.jbox2d.common.XForm.mulTrans(xf, p);
        };
        return FBody;
    }(fisica.FDrawable));
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
    var FJoint = (function (_super) {
        __extends(FJoint, _super);
        function FJoint() {
            var _this = _super.call(this) || this;
            _this.m_collideConnected = true;
            if (_this.m_joint === undefined)
                _this.m_joint = null;
            if (_this.m_world === undefined)
                _this.m_world = null;
            return _this;
        }
        /**
         * WARNING: This method is internal only and may change someday.  If you are using this method please contact the developer since there should be a better way or we may add something to the library.
         *
         * @return {org.jbox2d.dynamics.joints.Joint} the internal JBox2D joint
         */
        FJoint.prototype.getBox2dJoint = function () {
            return this.m_joint;
        };
        FJoint.prototype.processJoint = function (world, jd) {
            jd.collideConnected = this.m_collideConnected;
            this.m_joint = world.createJoint(jd);
        };
        FJoint.prototype.addToWorld = function (world) {
            this.m_world = world;
            var jd = this.getJointDef(world);
            if (jd == null)
                return;
            this.processJoint(this.m_world, jd);
            this.m_joint.m_userData = this;
        };
        FJoint.prototype.removeFromWorld = function () {
            if (this.m_joint == null)
                return;
            this.m_world.destroyJoint(this.m_joint);
            this.m_joint = null;
            this.m_world = null;
        };
        FJoint.prototype.getJointDef = function (world) {
            return null;
        };
        FJoint.prototype.preDraw = function (applet) {
            applet.pushStyle();
            applet.pushMatrix();
            applet.ellipseMode(PConstants.CENTER);
            applet.rectMode(PConstants.CENTER);
            this.appletFillStroke(applet);
        };
        FJoint.prototype.postDraw = function (applet) {
            applet.popMatrix();
            applet.popStyle();
        };
        FJoint.prototype.preDrawDebug = function (applet) {
            applet.pushStyle();
            applet.pushMatrix();
            applet.ellipseMode(PConstants.CENTER);
            applet.rectMode(PConstants.CENTER);
            applet.strokeWeight(1);
            applet.fill(80, 50);
            applet.stroke(80, 150);
        };
        FJoint.prototype.postDrawDebug = function (applet) {
            applet.popMatrix();
            applet.popStyle();
        };
        /**
         *
         * Returns the first body attached to this joint.
         * @return {fisica.FBody} first of the bodies connected by this joint
         */
        FJoint.prototype.getBody1 = function () {
            if (this.m_joint != null) {
                return this.m_joint.m_body1.getUserData();
            }
            return null;
        };
        /**
         *
         * Returns the second body attached to this joint.
         * @return {fisica.FBody} second of the bodies connected by this joint
         */
        FJoint.prototype.getBody2 = function () {
            if (this.m_joint != null) {
                return this.m_joint.m_body2.getUserData();
            }
            return null;
        };
        /**
         *
         * Sets whether the bodies connected by the joint should collide with each other.
         *
         * @param {boolean} value  if {@code true} the bodies connected by this joint will be allowed to collide with each other
         */
        FJoint.prototype.setCollideConnected = function (value) {
            if (this.m_joint != null) {
                this.m_joint.m_collideConnected = value;
            }
            this.m_collideConnected = value;
        };
        /**
         * Returns the horizontal component of the reaction force on the second body at the joint anchor.
         * @return {number} horizontal component of the reaction force
         */
        FJoint.prototype.getReactionForceX = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getReactionForce()).x;
            }
            return 0.0;
        };
        /**
         *
         * Returns the vertical component of the reaction force on the second body at the joint anchor.
         * @return {number} vertical component of the reaction force
         */
        FJoint.prototype.getReactionForceY = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getReactionForce()).y;
            }
            return 0.0;
        };
        /**
         *
         * Returns the reaction torque on the second body at the joint anchor.
         * @return {number} reaction torque
         */
        FJoint.prototype.getReactionTorque = function () {
            if (this.m_joint != null) {
                return this.m_joint.getReactionTorque();
            }
            return 0.0;
        };
        return FJoint;
    }(fisica.FDrawable));
    fisica.FJoint = FJoint;
    FJoint["__class"] = "fisica.FJoint";
})(fisica || (fisica = {}));
(function (fisica) {
    var FAddBodyAction = (function (_super) {
        __extends(FAddBodyAction, _super);
        function FAddBodyAction(body) {
            var _this = _super.call(this) || this;
            if (_this.m_body === undefined)
                _this.m_body = null;
            _this.m_body = body;
            return _this;
        }
        FAddBodyAction.prototype.apply = function (world) {
            world.addBody(this.m_body);
        };
        return FAddBodyAction;
    }(fisica.FWorldAction));
    fisica.FAddBodyAction = FAddBodyAction;
    FAddBodyAction["__class"] = "fisica.FAddBodyAction";
})(fisica || (fisica = {}));
(function (fisica) {
    var FAddJointAction = (function (_super) {
        __extends(FAddJointAction, _super);
        function FAddJointAction(joint) {
            var _this = _super.call(this) || this;
            if (_this.m_joint === undefined)
                _this.m_joint = null;
            _this.m_joint = joint;
            return _this;
        }
        FAddJointAction.prototype.apply = function (world) {
            world.addJoint(this.m_joint);
        };
        return FAddJointAction;
    }(fisica.FWorldAction));
    fisica.FAddJointAction = FAddJointAction;
    FAddJointAction["__class"] = "fisica.FAddJointAction";
})(fisica || (fisica = {}));
(function (fisica) {
    var FRemoveBodyAction = (function (_super) {
        __extends(FRemoveBodyAction, _super);
        function FRemoveBodyAction(body) {
            var _this = _super.call(this) || this;
            if (_this.m_body === undefined)
                _this.m_body = null;
            _this.m_body = body;
            return _this;
        }
        FRemoveBodyAction.prototype.apply = function (world) {
            world.removeBody(this.m_body);
        };
        return FRemoveBodyAction;
    }(fisica.FWorldAction));
    fisica.FRemoveBodyAction = FRemoveBodyAction;
    FRemoveBodyAction["__class"] = "fisica.FRemoveBodyAction";
})(fisica || (fisica = {}));
(function (fisica) {
    var FRemoveJointAction = (function (_super) {
        __extends(FRemoveJointAction, _super);
        function FRemoveJointAction(joint) {
            var _this = _super.call(this) || this;
            if (_this.m_joint === undefined)
                _this.m_joint = null;
            _this.m_joint = joint;
            return _this;
        }
        FRemoveJointAction.prototype.apply = function (world) {
            world.removeJoint(this.m_joint);
        };
        return FRemoveJointAction;
    }(fisica.FWorldAction));
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
    var FBlob = (function (_super) {
        __extends(FBlob, _super);
        function FBlob() {
            var _this = _super.call(this) || this;
            _this.m_damping = 0.0;
            _this.m_frequency = 0.0;
            _this.m_vertexSize = 0.4;
            _this.m_force = new org.jbox2d.common.Vec2();
            _this.m_torque = 0.0;
            _this.m_density = 1.0;
            _this.m_restitution = 0.5;
            _this.m_friction = 0.5;
            _this.m_bullet = false;
            if (_this.m_vertices === undefined)
                _this.m_vertices = null;
            if (_this.m_vertexBodies === undefined)
                _this.m_vertexBodies = null;
            if (_this.m_joint === undefined)
                _this.m_joint = null;
            _this.m_vertices = ([]);
            _this.m_vertexBodies = ([]);
            return _this;
        }
        FBlob.prototype.addToWorld = function (world) {
            this.m_joint = new fisica.FConstantVolumeJoint();
            this.m_joint.setFrequency(this.m_frequency);
            this.m_joint.setDamping(this.m_damping);
            this.m_joint.updateStyle(this);
            for (var i = 0; i < this.m_vertices.length; i++) {
                {
                    var p = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]);
                    var fb = new fisica.FCircle(this.getVertexSize());
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
            for (var i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    var fb = this.m_vertexBodies[i];
                    fb.setDrawable(false);
                    fb.setParent(this);
                    fb.setRotatable(false);
                    world.add$fisica_FBody(fb);
                    var f = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_force);
                    fb.addForce$float$float(f.x, f.y);
                    fb.addTorque(this.m_torque);
                    this.m_joint.addBody(fb);
                }
                ;
            }
            this.m_joint.setCollideConnected(false);
            world.add$fisica_FJoint(this.m_joint);
        };
        FBlob.prototype.removeFromWorld = function () {
            this.m_joint.removeFromWorld();
            for (var i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    (this.m_vertexBodies[i]).removeFromWorld();
                }
                ;
            }
        };
        /**
         * Adds a vertex body to the initial shape of the blob. This method must be
         * called before adding the body to the world.
         *
         * @param {fisica.FBody} b
         * b the body to be added
         */
        FBlob.prototype.addVertexBody = function (b) {
            /* add */ (this.m_vertexBodies.push(b) > 0);
        };
        /**
         * Adds a vertex to the initial shape of the blob. This method must be called
         * before adding the body to the world.
         *
         * @param {number} x
         * x coordinate of the vertex to be added
         * @param {number} y
         * y coordinate of the vertex to be added
         */
        FBlob.prototype.vertex = function (x, y) {
            /* add */ (this.m_vertices.push(fisica.Fisica.screenToWorld$float$float(x, y)) > 0);
        };
        /**
         * Gets the x coordinate of the ith vertex of the initial shape of the blob.
         *
         * @param {number} i
         * index of the vertex to retrieve
         * @return {number} the x coordinate of the vertex to retrieve
         */
        FBlob.prototype.getVertexX = function (i) {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]).x;
        };
        /**
         * Gets the y coordinate of the ith vertex of the initial shape of the blob.
         *
         * @param {number} i
         * index of the vertex to retrieve
         * @return {number} the y coordinate of the vertex to retrieve
         */
        FBlob.prototype.getVertexY = function (i) {
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]).y;
        };
        FBlob.prototype.setAsCircle$float$float$float$int = function (x, y, size, vertexCount) {
            /* clear */ (this.m_vertices.length = 0);
            for (var i = 0; i < vertexCount; i++) {
                {
                    var angle = PApplet.map(i, 0, vertexCount, 0, PConstants.TWO_PI);
                    var vx = Math.fround(x + Math.fround(Math.fround(size / 2) * PApplet.sin(angle)));
                    var vy = Math.fround(y + Math.fround(Math.fround(size / 2) * PApplet.cos(angle)));
                    this.vertex(vx, vy);
                }
                ;
            }
        };
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
        FBlob.prototype.setAsCircle = function (x, y, size, vertexCount) {
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
        };
        FBlob.prototype.setAsCircle$float$float$float = function (x, y, size) {
            this.setAsCircle$float$float$float$int(x, y, size, 30);
        };
        FBlob.prototype.setAsCircle$float = function (size) {
            this.setAsCircle$float$float$float$int(0, 0, size, 30);
        };
        FBlob.prototype.setAsCircle$float$int = function (size, vertexCount) {
            this.setAsCircle$float$float$float$int(0, 0, size, vertexCount);
        };
        /**
         * Returns the size of the circular vertices of the blob. This method must be
         * called before the body is added to the world.
         *
         * @return {number} size of the circular vertices of the blob
         */
        FBlob.prototype.getVertexSize = function () {
            return fisica.Fisica.worldToScreen$float(this.m_vertexSize);
        };
        /**
         * Sets the size of the circular vertices of the blob. This method must be
         * called before the body is added to the world.
         *
         * @param {number} size
         * size of the circular vertices of the blob
         */
        FBlob.prototype.setVertexSize = function (size) {
            this.m_vertexSize = fisica.Fisica.screenToWorld$float(size);
        };
        /**
         * Returns vertices of the blob.
         *
         * @return {Array} list of vertex bodies
         */
        FBlob.prototype.getVertexBodies = function () {
            return this.m_vertexBodies;
        };
        /**
         * Sets the frequency of the springs used to maintain the volume defined by the
         * vertices constant.
         *
         * @param {number} frequency
         * the frequency of the springs of the constant volume joint
         */
        FBlob.prototype.setFrequency = function (frequency) {
            if (this.m_joint != null) {
                this.m_joint.setFrequency(frequency);
            }
            this.m_frequency = frequency;
        };
        /**
         * Sets the damping of the springs used to maintain the volume defined by the
         * vertices constant.
         *
         * @param {number} damping
         * the damping of the springs of the constant volume joint
         */
        FBlob.prototype.setDamping = function (damping) {
            if (this.m_joint != null) {
                this.m_joint.setDamping(damping);
            }
            this.m_damping = damping;
        };
        FBlob.prototype.addForce = function (fx, fy, px, py) {
            if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && ((typeof px === 'number') || px === null) && ((typeof py === 'number') || py === null)) {
                _super.prototype.addForce.call(this, fx, fy, px, py);
            }
            else if (((typeof fx === 'number') || fx === null) && ((typeof fy === 'number') || fy === null) && px === undefined && py === undefined) {
                return this.addForce$float$float(fx, fy);
            }
            else
                throw new Error('invalid overload');
        };
        FBlob.prototype.addForce$float$float = function (fx, fy) {
            for (var i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].addForce$float$float(fx, fy);
                }
                ;
            }
            this.m_force.add(fisica.Fisica.screenToWorld$float$float(fx, fy));
        };
        FBlob.prototype.addTorque = function (t) {
            for (var i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].addTorque(t);
                }
                ;
            }
            this.m_torque += t;
        };
        FBlob.prototype.setDensity = function (d) {
            for (var i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].setDensity(d);
                }
                ;
            }
            this.m_density = d;
        };
        FBlob.prototype.setFriction = function (d) {
            for (var i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].setFriction(d);
                }
                ;
            }
            this.m_friction = d;
        };
        FBlob.prototype.setRestitution = function (d) {
            for (var i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].setRestitution(d);
                }
                ;
            }
            this.m_restitution = d;
        };
        FBlob.prototype.setBullet = function (d) {
            for (var i = 0; i < this.m_vertexBodies.length; i++) {
                {
                    this.m_vertexBodies[i].setBullet(d);
                }
                ;
            }
            this.m_bullet = d;
        };
        FBlob.prototype.setNoStroke = function () {
            _super.prototype.setNoStroke.call(this);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        };
        FBlob.prototype.setNoFill = function () {
            _super.prototype.setNoFill.call(this);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        };
        FBlob.prototype.setFillColor = function (col) {
            _super.prototype.setFillColor.call(this, col);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        };
        FBlob.prototype.setStrokeColor = function (col) {
            _super.prototype.setStrokeColor.call(this, col);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        };
        FBlob.prototype.setStrokeWeight = function (col) {
            _super.prototype.setStrokeWeight.call(this, col);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        };
        FBlob.prototype.setDrawable = function (val) {
            _super.prototype.setDrawable.call(this, val);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        };
        FBlob.prototype.attachImage = function (img) {
            _super.prototype.attachImage.call(this, img);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        };
        FBlob.prototype.dettachImage = function () {
            _super.prototype.dettachImage.call(this);
            if (this.m_joint != null) {
                this.m_joint.updateStyle(this);
            }
        };
        return FBlob;
    }(fisica.FBody));
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
    var FBox = (function (_super) {
        __extends(FBox, _super);
        function FBox(width, height) {
            var _this = _super.call(this) || this;
            if (_this.m_height === undefined)
                _this.m_height = 0;
            if (_this.m_width === undefined)
                _this.m_width = 0;
            _this.m_height = fisica.Fisica.screenToWorld$float(height);
            _this.m_width = fisica.Fisica.screenToWorld$float(width);
            return _this;
        }
        FBox.prototype.getShapeDef = function () {
            var pd = new org.jbox2d.collision.shapes.PolygonDef();
            pd.setAsBox(Math.fround(this.m_width / 2.0), Math.fround(this.m_height / 2.0));
            pd.density = this.m_density;
            pd.friction = this.m_friction;
            pd.restitution = this.m_restitution;
            pd.isSensor = this.m_sensor;
            return pd;
        };
        FBox.prototype.getTransformedShapeDef = function () {
            var pd = this.getShapeDef();
            var xf = new org.jbox2d.common.XForm();
            xf.R.set(-this.m_angle);
            xf.position = org.jbox2d.common.Mat22.mul(xf.R, this.m_position.negate());
            for (var i = 0; i < pd.vertices.length; i++) {
                {
                    var ver = pd.vertices[i];
                    org.jbox2d.common.XForm.mulTransToOut(xf, ver, ver);
                }
                ;
            }
            return pd;
        };
        /**
         * Returns the height of the rectangle.
         *
         * @usage Bodies
         * @see #getWidth()
         * @return {number} the height of the rectangle
         */
        FBox.prototype.getHeight = function () {
            return fisica.Fisica.worldToScreen$float(this.m_height);
        };
        /**
         * Returns the width of the rectangle.
         *
         * @usage Bodies
         * @see #getHeight()
         * @return {number} the width of the rectangle
         */
        FBox.prototype.getWidth = function () {
            return fisica.Fisica.worldToScreen$float(this.m_width);
        };
        /**
         * Sets the height of the rectangle.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @see #getWidth()
         * @return {void} the height of the rectangle
         * @param {number} height
         */
        FBox.prototype.setHeight = function (height) {
            this.m_height = fisica.Fisica.screenToWorld$float(height);
            this.recreateInWorld();
        };
        /**
         * Sets the width of the rectangle.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @see #getWidth()
         * @return {void} the width of the rectangle
         * @param {number} width
         */
        FBox.prototype.setWidth = function (width) {
            this.m_width = fisica.Fisica.screenToWorld$float(width);
            this.recreateInWorld();
        };
        FBox.prototype.draw = function (applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                applet.rect(0, 0, this.getWidth(), this.getHeight());
            }
            this.postDraw(applet);
        };
        FBox.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            applet.rect(0, 0, this.getWidth(), this.getHeight());
            this.postDrawDebug(applet);
        };
        return FBox;
    }(fisica.FBody));
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
    var FCircle = (function (_super) {
        __extends(FCircle, _super);
        function FCircle(size) {
            var _this = _super.call(this) || this;
            if (_this.m_size === undefined)
                _this.m_size = 0;
            _this.m_size = fisica.Fisica.screenToWorld$float(size);
            return _this;
        }
        FCircle.prototype.getShapeDef = function () {
            var pd = new org.jbox2d.collision.shapes.CircleDef();
            pd.radius = Math.fround(this.m_size / 2.0);
            pd.density = this.m_density;
            pd.friction = this.m_friction;
            pd.restitution = this.m_restitution;
            pd.isSensor = this.m_sensor;
            return pd;
        };
        FCircle.prototype.getTransformedShapeDef = function () {
            var pd = this.getShapeDef();
            pd.localPosition.set(this.m_position);
            return pd;
        };
        /**
         * Returns the size of the circle.
         *
         * @usage Bodies
         * @return {number} the size of the circle
         */
        FCircle.prototype.getSize = function () {
            return fisica.Fisica.worldToScreen$float(this.m_size);
        };
        /**
         * Sets the size of the circle.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @param {number} size the size of the circle
         */
        FCircle.prototype.setSize = function (size) {
            this.m_size = fisica.Fisica.screenToWorld$float(size);
            this.recreateInWorld();
        };
        FCircle.prototype.draw = function (applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                applet.ellipse(0, 0, this.getSize(), this.getSize());
            }
            this.postDraw(applet);
        };
        FCircle.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            applet.ellipse(0, 0, this.getSize(), this.getSize());
            applet.line(0, 0, Math.fround(this.getSize() / 2), 0);
            this.postDrawDebug(applet);
        };
        return FCircle;
    }(fisica.FBody));
    fisica.FCircle = FCircle;
    FCircle["__class"] = "fisica.FCircle";
})(fisica || (fisica = {}));
(function (fisica) {
    var FCompound = (function (_super) {
        __extends(FCompound, _super);
        function FCompound() {
            var _this = _super.call(this) || this;
            if (_this.m_shapes === undefined)
                _this.m_shapes = null;
            _this.m_shapes = ([]);
            return _this;
        }
        FCompound.prototype.getShapeDefs = function () {
            var result = ([]);
            for (var i = 0; i < this.m_shapes.length; i++) {
                {
                    var sd = (this.m_shapes[i].getTransformedShapeDef());
                    sd = this.m_shapes[i].processShapeDef(sd);
                    /* add */ (result.push(sd) > 0);
                }
                ;
            }
            return result;
        };
        FCompound.prototype.getBodies = function () {
            return this.m_shapes;
        };
        FCompound.prototype.addBody = function (body) {
            /* add */ (this.m_shapes.push(body) > 0);
        };
        FCompound.prototype.draw = function (applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                for (var i = 0; i < this.m_shapes.length; i++) {
                    {
                        this.m_shapes[i].draw(applet);
                    }
                    ;
                }
            }
            this.postDraw(applet);
        };
        FCompound.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            for (var i = 0; i < this.m_shapes.length; i++) {
                {
                    this.m_shapes[i].drawDebug(applet);
                }
                ;
            }
            this.postDrawDebug(applet);
        };
        return FCompound;
    }(fisica.FBody));
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
    var FLine = (function (_super) {
        __extends(FLine, _super);
        function FLine(x1, y1, x2, y2) {
            var _this = _super.call(this) || this;
            if (_this.m_start === undefined)
                _this.m_start = null;
            if (_this.m_end === undefined)
                _this.m_end = null;
            _this.m_start = fisica.Fisica.screenToWorld$float$float(x1, y1);
            _this.m_end = fisica.Fisica.screenToWorld$float$float(x2, y2);
            return _this;
        }
        FLine.prototype.getShapeDef = function () {
            var pd = new org.jbox2d.collision.shapes.EdgeChainDef();
            pd.addVertex(this.m_start);
            pd.addVertex(this.m_end);
            pd.setIsLoop(false);
            pd.density = this.m_density;
            pd.friction = this.m_friction;
            pd.restitution = this.m_restitution;
            pd.isSensor = this.m_sensor;
            return pd;
        };
        /**
         * Sets the start point of the line.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @param {number} x  horizontal position of the first point of the line
         * @param {number} y  vertical position of the first point of the line
         */
        FLine.prototype.setStart = function (x, y) {
            this.m_start = fisica.Fisica.screenToWorld$float$float(x, y);
            this.recreateInWorld();
        };
        /**
         * Sets the end point of the line.
         * Under the hood the body is removed and readded to the world.
         *
         * @usage Bodies
         * @param {number} x  horizontal position of the first point of the line
         * @param {number} y  vertical position of the first point of the line
         */
        FLine.prototype.setEnd = function (x, y) {
            this.m_end = fisica.Fisica.screenToWorld$float$float(x, y);
            this.recreateInWorld();
        };
        FLine.prototype.draw = function (applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                var tempStart = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_start);
                var tempEnd = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_end);
                applet.line(tempStart.x, tempStart.y, tempEnd.x, tempEnd.y);
            }
            this.postDraw(applet);
        };
        FLine.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            var tempStart = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_start);
            var tempEnd = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_end);
            applet.line(tempStart.x, tempStart.y, tempEnd.x, tempEnd.y);
            this.postDrawDebug(applet);
        };
        return FLine;
    }(fisica.FBody));
    fisica.FLine = FLine;
    FLine["__class"] = "fisica.FLine";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs a polygonal body that can be added to a world.  It creates an empty polygon, before adding the blob to the world use {@link #vertex(float,float) vertex} to define the shape of the polygon.
     * @class
     * @extends fisica.FBody
     */
    var FPoly = (function (_super) {
        __extends(FPoly, _super);
        function FPoly() {
            var _this = _super.call(this) || this;
            if (_this.m_polygon === undefined)
                _this.m_polygon = null;
            if (_this.m_closed === undefined)
                _this.m_closed = false;
            if (_this.m_vertices === undefined)
                _this.m_vertices = null;
            _this.m_closed = false;
            _this.m_vertices = ([]);
            return _this;
        }
        /**
         * Adds vertices to the shape of the poly.  This method must called before adding the body to the world.
         *
         * @param {number} x  x coordinate of the vertex to be added
         * @param {number} y  y coordinate of the vertex to be added
         */
        FPoly.prototype.vertex = function (x, y) {
            /* add */ (this.m_vertices.push(fisica.Fisica.screenToWorld$float$float(x, y)) > 0);
        };
        FPoly.prototype.processBody = function (bd, sd) {
            org.jbox2d.util.nonconvex.Polygon.decomposeConvexAndAddTo(this.m_polygon, bd, sd);
        };
        FPoly.prototype.getShapeDef = function () {
            var pd = new org.jbox2d.collision.shapes.PolygonDef();
            /* add */ (this.m_vertices.push(new org.jbox2d.common.Vec2(this.m_vertices[this.m_vertices.length - 1])) > 0);
            this.m_closed = true;
            var vertices = (function (s) { var a = []; while (s-- > 0)
                a.push(null); return a; })(/* size */ this.m_vertices.length);
            /* toArray */ (function (a1, a2) { if (a1.length >= a2.length) {
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
        };
        FPoly.prototype.getTransformedShapeDef = function () {
            var pd = this.getShapeDef();
            var xf = new org.jbox2d.common.XForm();
            xf.R.set(-this.m_angle);
            xf.position = org.jbox2d.common.Mat22.mul(xf.R, this.m_position.negate());
            for (var i = 0; i < pd.vertices.length; i++) {
                {
                    var ver = pd.vertices[i];
                    org.jbox2d.common.XForm.mulTransToOut(xf, ver, ver);
                }
                ;
            }
            return pd;
        };
        FPoly.prototype.draw = function (applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                this.drawImage(applet);
            }
            else {
                applet.beginShape();
                for (var i = 0; i < this.m_vertices.length; i++) {
                    {
                        var v = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]);
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
        };
        FPoly.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            var b = this.getBox2dBody();
            if (b != null) {
                applet.pushStyle();
                applet.stroke(120, 100);
                applet.fill(120, 30);
                var ss = b.getShapeList();
                while ((ss != null)) {
                    {
                        var ps = ss;
                        var vecs = ps.getVertices();
                        applet.beginShape();
                        for (var j = 0; j < ps.getVertexCount(); j++) {
                            {
                                var v = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(vecs[j]);
                                applet.vertex(v.x, v.y);
                            }
                            ;
                        }
                        applet.endShape(PConstants.CLOSE);
                        var c = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(ps.getCentroid());
                        applet.ellipse(c.x, c.y, 2, 2);
                        ss = ss.getNext();
                    }
                }
                ;
                applet.popStyle();
            }
            applet.beginShape();
            for (var i = 0; i < this.m_vertices.length; i++) {
                {
                    var v = fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_vertices[i]);
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
        };
        return FPoly;
    }(fisica.FBody));
    fisica.FPoly = FPoly;
    FPoly["__class"] = "fisica.FPoly";
})(fisica || (fisica = {}));
(function (fisica) {
    /**
     * Constructs an constant volume joint.  It creates an empty joint, before adding the joint to the world use {@link #addBody(FBody) addBody} to add bodies to the joint and to define the initial and target volume of the joint.
     * @class
     * @extends fisica.FJoint
     */
    var FConstantVolumeJoint = (function (_super) {
        __extends(FConstantVolumeJoint, _super);
        function FConstantVolumeJoint() {
            var _this = _super.call(this) || this;
            _this.m_damping = 0.0;
            _this.m_frequency = 0.0;
            if (_this.m_bodies === undefined)
                _this.m_bodies = null;
            _this.m_bodies = ([]);
            return _this;
        }
        FConstantVolumeJoint.prototype.getJointDef = function (world) {
            var md = new org.jbox2d.dynamics.joints.ConstantVolumeJointDef();
            md.frequencyHz = this.m_frequency;
            md.dampingRatio = this.m_damping;
            for (var i = 0; i < this.m_bodies.length; i++) {
                {
                    var b = this.m_bodies[i].m_body;
                    if (b != null) {
                        md.addBody(b);
                    }
                }
                ;
            }
            return md;
        };
        /**
         * Adds a body to the joint.  This method must be called before adding the joint to the world.
         *
         * @param {fisica.FBody} b  body to be added
         */
        FConstantVolumeJoint.prototype.addBody = function (b) {
            /* add */ (this.m_bodies.push(b) > 0);
        };
        /**
         * Return the group of bodies that are connected by this joint.
         *
         * @return   {Array} list of bodies (ArrayList of FBody) connected by the joint
         */
        FConstantVolumeJoint.prototype.getBodies = function () {
            return this.m_bodies;
        };
        /**
         * Sets the damping of the springs used to maintain the volume defined by the vertices constant.  This method must be called before adding the joint to the world.
         *
         * @param {number} damping  the damping of the springs of the constant volume joint
         */
        FConstantVolumeJoint.prototype.setDamping = function (damping) {
            this.m_damping = damping;
        };
        /**
         * Sets the frequency of the springs used to maintain the volume defined by the vertices constant.  This method must be called before adding the joint to the world.
         *
         * @param {number} frequency  the frequency of the springs of the constant volume joint
         */
        FConstantVolumeJoint.prototype.setFrequency = function (frequency) {
            this.m_frequency = frequency;
        };
        FConstantVolumeJoint.prototype.getCentroid = function () {
            var centroid = new PVector(0, 0);
            var signedArea = 0.0;
            var x0 = 0.0;
            var y0 = 0.0;
            var x1 = 0.0;
            var y1 = 0.0;
            var a = 0.0;
            var i;
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
        };
        FConstantVolumeJoint.prototype.draw = function (applet) {
            this.preDraw(applet);
            if (this.m_image != null) {
                applet.pushMatrix();
                var c = this.getCentroid();
                applet.translate(c.x, c.y);
                this.drawImage(applet);
                applet.popMatrix();
            }
            else {
                if (this.m_bodies.length > 0) {
                    applet.beginShape();
                    for (var i = 0; i < this.m_bodies.length; i++) {
                        {
                            applet.vertex(this.m_bodies[i].getX(), this.m_bodies[i].getY());
                        }
                        ;
                    }
                    applet.endShape(PConstants.CLOSE);
                }
            }
            this.postDraw(applet);
        };
        FConstantVolumeJoint.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            if (this.m_bodies.length > 0) {
                applet.beginShape();
                for (var i = 0; i < this.m_bodies.length; i++) {
                    {
                        applet.vertex(this.m_bodies[i].getX(), this.m_bodies[i].getY());
                    }
                    ;
                }
                applet.endShape(PConstants.CLOSE);
                for (var i = 0; i < this.m_bodies.length; i++) {
                    {
                        applet.ellipse(this.m_bodies[i].getX(), this.m_bodies[i].getY(), 5, 5);
                    }
                    ;
                }
            }
            this.postDrawDebug(applet);
        };
        return FConstantVolumeJoint;
    }(fisica.FJoint));
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
    var FDistanceJoint = (function (_super) {
        __extends(FDistanceJoint, _super);
        function FDistanceJoint(body1, body2) {
            var _this = _super.call(this) || this;
            _this.m_damping = 0.3;
            _this.m_frequency = 10.0;
            if (_this.m_body1 === undefined)
                _this.m_body1 = null;
            if (_this.m_body2 === undefined)
                _this.m_body2 = null;
            if (_this.m_length === undefined)
                _this.m_length = 0;
            if (_this.m_anchor1 === undefined)
                _this.m_anchor1 = null;
            if (_this.m_anchor2 === undefined)
                _this.m_anchor2 = null;
            _this.m_body1 = body1;
            _this.m_body2 = body2;
            _this.m_anchor1 = new org.jbox2d.common.Vec2(0.0, 0.0);
            _this.m_anchor2 = new org.jbox2d.common.Vec2(0.0, 0.0);
            _this.calculateLength();
            return _this;
        }
        FDistanceJoint.prototype.getJointDef = function (world) {
            var md = new org.jbox2d.dynamics.joints.DistanceJointDef();
            if (this.m_body1 == null || this.m_body1.m_body == null || this.m_body2 == null || this.m_body2.m_body == null) {
                return null;
            }
            md.body1 = this.m_body1.m_body;
            md.body2 = this.m_body2.m_body;
            md.localAnchor1 = (function (o) { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                var clone = Object.create(o);
                for (var p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(this.m_anchor1);
            md.localAnchor2 = (function (o) { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                var clone = Object.create(o);
                for (var p in o) {
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
        };
        /**
         * Sets the damping of the spring used to maintain the distance between the bodies constant.
         *
         * @param {number} damping  the damping of the spring
         */
        FDistanceJoint.prototype.setDamping = function (damping) {
            if (this.m_joint != null) {
                this.m_joint.m_dampingRatio = damping;
            }
            this.m_damping = damping;
        };
        /**
         * Sets the frequency of the spring used to maintain the distance between the bodies constant.
         *
         * @param {number} frequency  the frequency of the spring
         */
        FDistanceJoint.prototype.setFrequency = function (frequency) {
            if (this.m_joint != null) {
                this.m_joint.m_frequencyHz = frequency;
            }
            this.m_frequency = frequency;
        };
        /**
         * Sets the length of the joint to the current distance between the bodies.
         */
        FDistanceJoint.prototype.calculateLength = function () {
            var lengthX = (Math.fround((Math.fround(this.m_body1.getX() + this.getAnchor1X())) - (Math.fround(this.m_body2.getX() + this.getAnchor2X()))));
            var lengthY = (Math.fround((Math.fround(this.m_body1.getY() + this.getAnchor1Y())) - (Math.fround(this.m_body2.getY() + this.getAnchor2Y()))));
            this.setLength(Math.fround(Math.sqrt(Math.fround(Math.fround(lengthX * lengthX) + Math.fround(lengthY * lengthY)))));
        };
        /**
         * Sets the target distance for the joint.  This is the distance that the joint will try to maintain between the two bodies.  If you want to use as length the current distance between the two bodies, use the method {@link #calculateLength() calculateLength}.
         *
         * @param {number} length  the length of the joint
         */
        FDistanceJoint.prototype.setLength = function (length) {
            if (this.m_joint != null) {
                this.m_joint.m_length = fisica.Fisica.screenToWorld$float(length);
            }
            this.m_length = length;
        };
        /**
         * Sets the position of the anchor of the second end of the joint on the second body.  This position must be given relative to the center of the second body.  The anchor point is the point used to calculate the distance and to apply forces in order to move the body.
         *
         * @param {number} x  the horizontal coordinate of the second anchor relative to the center of the second body
         * @param {number} y  the vertical coordinate of the second anchor relative to the center of the second body
         */
        FDistanceJoint.prototype.setAnchor2 = function (x, y) {
            if (this.m_joint != null) {
                this.m_joint.getAnchor2().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_anchor2 = fisica.Fisica.screenToWorld$float$float(x, y);
        };
        /**
         * Sets the position of the anchor of the first end of the joint on the first body.  This position must be given relative to the center of the first body.  The anchor point is the point used to calculate the distance and to apply forces in order to move the body.
         *
         * @param {number} x  the horizontal coordinate of the first anchor relative to the center of the first body
         * @param {number} y  the vertical coordinate of the first anchor relative to the center of the first body
         */
        FDistanceJoint.prototype.setAnchor1 = function (x, y) {
            if (this.m_joint != null) {
                this.m_joint.getAnchor1().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_anchor1 = fisica.Fisica.screenToWorld$float$float(x, y);
        };
        /**
         * Get the horizontal coordinate of the first anchor point on the first body.  This position is given relative to the center of the first body.
         *
         * @return  {number} the horizontal coordinate of the first anchor relative to the center of the first body
         */
        FDistanceJoint.prototype.getAnchor1X = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor1()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor1.x);
        };
        /**
         * Get the vertical coordinate of the first anchor point on the first body.  This position is given relative to the center of the first body.
         *
         * @return  {number} the vertical coordinate of the first anchor relative to the center of the first body
         */
        FDistanceJoint.prototype.getAnchor1Y = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor1()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor1.y);
        };
        /**
         * Get the horizontal coordinate of the second anchor point on the second body.  This position is given relative to the center of the second body.
         *
         * @return  {number} the horizontal coordinate of the second anchor relative to the center of the second body
         */
        FDistanceJoint.prototype.getAnchor2X = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor2.x);
        };
        /**
         * Get the vertical coordinate of the second anchor point on the second body.  This position is given relative to the center of the second body.
         *
         * @return  {number} the vertical coordinate of the second anchor relative to the center of the second body
         */
        FDistanceJoint.prototype.getAnchor2Y = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor2.y);
        };
        FDistanceJoint.prototype.draw = function (applet) {
            this.preDraw(applet);
            applet.ellipse(this.getAnchor1X(), this.getAnchor1Y(), 5, 5);
            applet.line(this.getAnchor1X(), this.getAnchor1Y(), this.getAnchor2X(), this.getAnchor2Y());
            applet.ellipse(this.getAnchor2X(), this.getAnchor2Y(), 5, 5);
            this.postDraw(applet);
        };
        FDistanceJoint.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            var numSpins = ((((Math.fround((Math.fround(this.m_length - 20)) / 6)) | 0) / 2 | 0)) * 2 + 1;
            if (numSpins <= 0) {
                applet.line(this.getAnchor1X(), this.getAnchor1Y(), this.getAnchor2X(), this.getAnchor2Y());
            }
            else {
                applet.pushMatrix();
                applet.translate(this.getAnchor1X(), this.getAnchor1Y());
                var ang = PApplet.atan2(Math.fround(this.getAnchor2Y() - this.getAnchor1Y()), Math.fround(this.getAnchor2X() - this.getAnchor1X()));
                var dist = PApplet.dist(this.getAnchor1X(), this.getAnchor1Y(), this.getAnchor2X(), this.getAnchor2Y());
                applet.rotate(ang);
                if (this.m_length > 0) {
                    applet.rect(Math.fround(dist / 2), 0, this.m_length, 12);
                }
                applet.pushStyle();
                applet.noFill();
                applet.beginShape();
                applet.vertex(0, 0);
                applet.vertex(10, 0);
                var x = void 0;
                var y = void 0;
                for (var i = 0; i < numSpins; i++) {
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
        };
        return FDistanceJoint;
    }(fisica.FJoint));
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
    var FGearJoint = (function (_super) {
        __extends(FGearJoint, _super);
        function FGearJoint(joint1, joint2) {
            var _this = _super.call(this) || this;
            _this.m_ratio = 1.0;
            _this.m_worldRatio = 1.0;
            if (_this.m_joint1 === undefined)
                _this.m_joint1 = null;
            if (_this.m_joint2 === undefined)
                _this.m_joint2 = null;
            _this.m_joint1 = joint1;
            _this.m_joint2 = joint2;
            _this.updateRatio();
            return _this;
        }
        FGearJoint.prototype.getJointDef = function (world) {
            var md = new org.jbox2d.dynamics.joints.GearJointDef();
            md.joint1 = this.m_joint1.m_joint;
            md.joint2 = this.m_joint2.m_joint;
            md.ratio = this.m_worldRatio;
            return md;
        };
        FGearJoint.prototype.updateRatio = function () {
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
        };
        /**
         * Sets the ratio of movement transfer from one joint to the other of the gear.
         *
         * @param {number} ratio  the ratio of movement that is transfered between the first and the second joints of the gear
         */
        FGearJoint.prototype.setRatio = function (ratio) {
            this.m_ratio = ratio;
            this.updateRatio();
        };
        FGearJoint.prototype.draw = function (applet) {
        };
        return FGearJoint;
    }(fisica.FJoint));
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
    var FMouseJoint = (function (_super) {
        __extends(FMouseJoint, _super);
        function FMouseJoint(body, x, y) {
            var _this = _super.call(this) || this;
            _this.m_damping = 0.9;
            _this.m_frequency = 20.0;
            if (_this.m_fbody === undefined)
                _this.m_fbody = null;
            if (_this.m_anchor === undefined)
                _this.m_anchor = null;
            if (_this.m_target === undefined)
                _this.m_target = null;
            _this.m_fbody = body;
            _this.m_target = fisica.Fisica.screenToWorld$float$float(x, y);
            _this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
            return _this;
        }
        FMouseJoint.prototype.getJointDef = function (world) {
            var body = this.m_fbody.m_body;
            var md = new org.jbox2d.dynamics.joints.MouseJointDef();
            md.body1 = this.m_world.getGroundBody();
            md.body2 = body;
            md.target.set(this.m_anchor);
            md.maxForce = Math.fround(10000.0 * body.m_mass);
            md.frequencyHz = this.m_frequency;
            md.dampingRatio = this.m_damping;
            body.wakeUp();
            return md;
        };
        /**
         * Sets the damping of the spring used to maintain the body and the target together.  This property must be set before adding the joint to the world.
         *
         * @param {number} damping  the damping of the spring
         */
        FMouseJoint.prototype.setDamping = function (damping) {
            this.m_damping = damping;
        };
        /**
         * Sets the frequency of the spring used to maintain the body and the target together.  This property must be set before adding the joint to the world.
         *
         * @param {number} frequency  the frequency of the spring
         */
        FMouseJoint.prototype.setFrequency = function (frequency) {
            this.m_frequency = frequency;
        };
        /**
         * Sets the target position of the joint.  By setting this property everytime the mouse is used we are able to make the body of this joint follow mouse.
         *
         * @param {number} x  horizontal coordinate of the target of the joint
         * @param {number} y  vertical coordinate of the target of the joint
         */
        FMouseJoint.prototype.setTarget = function (x, y) {
            if (this.m_joint != null) {
                this.m_joint.setTarget(fisica.Fisica.screenToWorld$float$float(x, y));
            }
            this.m_target = fisica.Fisica.screenToWorld$float$float(x, y);
        };
        /**
         * Returns the horizontal target position of the joint.
         *
         * @return  {number} horizontal coordinate of the target of the joint
         */
        FMouseJoint.prototype.getTargetX = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.m_target).x;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_target).x;
        };
        /**
         * Returns the vertical target position of the joint.
         *
         * @return  {number} vertical coordinate of the target of the joint
         */
        FMouseJoint.prototype.getTargetY = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.m_target).y;
            }
            return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_target).y;
        };
        /**
         * Sets the body grabbed by this joint and the target position.
         *
         * @param {fisica.FBody} body  the body to be grabbed by the joint
         * @param {number} x  horizontal coordinate of the target of the joint
         * @param {number} y  vertical coordinate of the target of the joint
         */
        FMouseJoint.prototype.setGrabbedBodyAndTarget = function (body, x, y) {
            if (this.m_joint != null) {
                this.m_joint.m_body2 = body.m_body;
                this.m_joint.m_target.set(fisica.Fisica.screenToWorld$float$float(x, y));
                this.m_joint.getAnchor2().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_fbody = body;
            this.m_target = fisica.Fisica.screenToWorld$float$float(x, y);
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
        };
        /**
         * Releases the body grabbed by this joint.
         */
        FMouseJoint.prototype.releaseGrabbedBody = function () {
            if (this.m_joint != null) {
                this.m_joint.m_body2 = null;
                this.m_joint.m_target.set(0.0, 0.0);
            }
            this.m_fbody = null;
            this.m_target = null;
        };
        /**
         * Returns the body grabbed by this joint.
         *
         * @return {fisica.FBody} the body grabbed by this joint
         */
        FMouseJoint.prototype.getGrabbedBody = function () {
            if (this.m_joint != null) {
                return this.m_joint.m_body2.getUserData();
            }
            return this.m_fbody;
        };
        /**
         * Sets the anchor position at which the joint grabs the body.  The anchor point is the point used to apply forces in order to move the body.
         *
         * @param {number} x  the horizontal coordinate of the anchor relative to the center of the body
         * @param {number} y  the vertical coordinate of the anchor relative to the center of the body
         */
        FMouseJoint.prototype.setAnchor = function (x, y) {
            if (this.m_joint != null) {
                this.m_joint.getAnchor2().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
        };
        /**
         * Get the horizontal coordinate of the anchor point on the body.  This position is given relative to the center of the body.
         *
         * @return  {number} the horizontal coordinate of the anchor relative to the center of the first body
         */
        FMouseJoint.prototype.getAnchorX = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.x);
        };
        /**
         * Get the vertical coordinate of the anchor point on the body.  This position is given relative to the center of the body.
         *
         * @return  {number} the vertical coordinate of the anchor relative to the center of the first body
         */
        FMouseJoint.prototype.getAnchorY = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.y);
        };
        FMouseJoint.prototype.draw = function (applet) {
            this.preDraw(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getTargetX(), this.getTargetY());
            this.postDraw(applet);
        };
        FMouseJoint.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getTargetX(), this.getTargetY());
            applet.ellipse(this.getAnchorX(), this.getAnchorY(), 5, 5);
            applet.ellipse(this.getTargetX(), this.getTargetY(), 10, 10);
            this.postDrawDebug(applet);
        };
        return FMouseJoint;
    }(fisica.FJoint));
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
    var FPrismaticJoint = (function (_super) {
        __extends(FPrismaticJoint, _super);
        function FPrismaticJoint(body1, body2) {
            var _this = _super.call(this) || this;
            _this.m_localAxis1 = new org.jbox2d.common.Vec2(0, 1);
            /**
             * The local anchor point relative to body1's origin.
             */
            _this.m_localAnchor1 = new org.jbox2d.common.Vec2(0.0, 0.0);
            /**
             * The local anchor point relative to body2's origin.
             */
            _this.m_localAnchor2 = new org.jbox2d.common.Vec2(0.0, 0.0);
            /**
             * The body2 angle minus body1 angle in the reference state (radians).
             */
            _this.m_referenceAngle = 0.0;
            /**
             * A flag to enable joint limits.
             */
            _this.m_enableLimit = false;
            /**
             * The lower translation for the joint limit (world coords).
             */
            _this.m_lowerTranslation = 0.0;
            /**
             * The upper translation for the joint limit (world coords).
             */
            _this.m_upperTranslation = 0.0;
            /**
             * A flag to enable the joint motor.
             */
            _this.m_enableMotor = false;
            /**
             * The desired motor speed. Usually in radians per second.
             */
            _this.m_motorSpeed = 0.0;
            /**
             * The maximum motor torque used to achieve the desired motor speed.
             * Usually in N-m.
             */
            _this.m_maxMotorTorque = 0.0;
            if (_this.m_body1 === undefined)
                _this.m_body1 = null;
            if (_this.m_body2 === undefined)
                _this.m_body2 = null;
            if (_this.m_anchor === undefined)
                _this.m_anchor = null;
            if (_this.m_axis === undefined)
                _this.m_axis = null;
            if (_this.m_force === undefined)
                _this.m_force = 0;
            if (_this.m_torque === undefined)
                _this.m_torque = 0;
            if (_this.m_motorForce === undefined)
                _this.m_motorForce = 0;
            if (_this.m_limitForce === undefined)
                _this.m_limitForce = 0;
            if (_this.m_limitPositionImpulse === undefined)
                _this.m_limitPositionImpulse = 0;
            if (_this.m_maxMotorForce === undefined)
                _this.m_maxMotorForce = 0;
            _this.m_body1 = body1;
            _this.m_body2 = body2;
            _this.m_anchor = fisica.Fisica.screenToWorld$float$float(body2.getX(), body2.getY());
            _this.updateLocalAnchors();
            _this.m_axis = new org.jbox2d.common.Vec2(0.0, 1.0);
            _this.updateLocalAxis();
            _this.m_referenceAngle = Math.fround(_this.m_body2.getRotation() - _this.m_body1.getRotation());
            return _this;
        }
        FPrismaticJoint.prototype.updateLocalAnchors = function () {
            if (this.m_body1.m_body != null) {
                this.m_body1.m_body.getLocalPointToOut(this.m_anchor, this.m_localAnchor1);
            }
            if (this.m_body2.m_body != null) {
                this.m_body2.m_body.getLocalPointToOut(this.m_anchor, this.m_localAnchor2);
            }
        };
        FPrismaticJoint.prototype.updateLocalAxis = function () {
            if (this.m_body1.m_body != null) {
                var axis = new org.jbox2d.common.Vec2(this.m_axis);
                this.m_body1.m_body.getLocalVectorToOut(axis, this.m_localAxis1);
            }
        };
        FPrismaticJoint.prototype.getJointDef = function (world) {
            var md = new org.jbox2d.dynamics.joints.PrismaticJointDef();
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
        };
        /**
         * Sets the axis of movement of the joint.  This is only axis alog which the bodies can translate with relation to each other.  The axis is given global coordinates, relative to the center of the canvas.  This property must be set before adding the joint to the world.
         *
         * @param {number} x  the horizontal component of the axis in global coordinates, relative to the center of the canvas
         * @param {number} y  the vertical coordinate of the axis in global coordinates, relative to the center of the canvas
         */
        FPrismaticJoint.prototype.setAxis = function (x, y) {
            var d = PApplet.dist(0, 0, x, y);
            this.m_axis.set(Math.fround(x / d), Math.fround(y / d));
            this.updateLocalAxis();
        };
        /**
         * Sets the position of the anchor of the joint.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @param {number} x  the horizontal coordinate of the anchor in global coordinates, relative to the center of the canvas
         * @param {number} y  the vertical coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        FPrismaticJoint.prototype.setAnchor = function (x, y) {
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
            this.updateLocalAnchors();
        };
        /**
         * Get the horizontal coordinate of the anchor of the joint.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @return  {number} the horizontal coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        FPrismaticJoint.prototype.getAnchorX = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor1()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.x);
        };
        /**
         * Get the vertical coordinate of the anchor of the joint.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @return  {number} the vertical coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        FPrismaticJoint.prototype.getAnchorY = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor1()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.y);
        };
        /**
         * Set the lowest translation allowed.  This property only has effect if the {@code enableLimit} has been set to {@code true} using {@link #setEnableLimit(boolean)}.
         *
         * @param {number} translation  lowest translation position in pixels
         */
        FPrismaticJoint.prototype.setLowerTranslation = function (translation) {
            if (this.m_joint != null) {
                this.m_joint.m_lowerTranslation = fisica.Fisica.screenToWorld$float(translation);
            }
            this.m_lowerTranslation = fisica.Fisica.screenToWorld$float(translation);
        };
        /**
         * Set the highest translation allowed.  This property only has effect if the {@code enableLimit} has been set to {@code true} using {@link #setEnableLimit(boolean)}.
         *
         * @param {number} translation  highest translation position in pixels
         */
        FPrismaticJoint.prototype.setUpperTranslation = function (translation) {
            if (this.m_joint != null) {
                this.m_joint.m_upperTranslation = fisica.Fisica.screenToWorld$float(translation);
            }
            this.m_upperTranslation = fisica.Fisica.screenToWorld$float(translation);
        };
        /**
         * Set limits to the allowed translation of one body respect to the other.  If set to {@code true} the limits imposed using {@link #setLowerTranslation(float) setLowerTranslation} and {@link #setUpperTranslation(float) setLowerTranslation} are enforced.
         *
         * @param {boolean} value  if {@code true} the bodies will be able to translate along the axis only between certain limits
         */
        FPrismaticJoint.prototype.setEnableLimit = function (value) {
            if (this.m_joint != null) {
                this.m_joint.m_enableLimit = value;
            }
            this.m_enableLimit = value;
        };
        FPrismaticJoint.prototype.draw = function (applet) {
            this.preDraw(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody1().getX(), this.getBody1().getY());
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody2().getX(), this.getBody2().getY());
            applet.rect(this.getAnchorX(), this.getAnchorY(), 10, 10);
            this.postDraw(applet);
        };
        FPrismaticJoint.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            var lineHalfLength = 150;
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
        };
        return FPrismaticJoint;
    }(fisica.FJoint));
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
    var FRevoluteJoint = (function (_super) {
        __extends(FRevoluteJoint, _super);
        function FRevoluteJoint(body1, body2, x, y) {
            var _this = this;
            if (((body1 != null && body1 instanceof fisica.FBody) || body1 === null) && ((body2 != null && body2 instanceof fisica.FBody) || body2 === null) && ((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                var __args = arguments;
                _this = _super.call(this) || this;
                if (_this.m_body1 === undefined)
                    _this.m_body1 = null;
                if (_this.m_body2 === undefined)
                    _this.m_body2 = null;
                if (_this.m_anchor === undefined)
                    _this.m_anchor = null;
                _this.m_localAnchor1 = new org.jbox2d.common.Vec2(0.0, 0.0);
                _this.m_localAnchor2 = new org.jbox2d.common.Vec2(0.0, 0.0);
                _this.m_referenceAngle = 0.0;
                _this.m_enableLimit = false;
                _this.m_lowerAngle = 0.0;
                _this.m_upperAngle = 0.0;
                _this.m_enableMotor = false;
                _this.m_motorSpeed = 0.0;
                _this.m_maxMotorTorque = 0.0;
                if (_this.m_body1 === undefined)
                    _this.m_body1 = null;
                if (_this.m_body2 === undefined)
                    _this.m_body2 = null;
                if (_this.m_anchor === undefined)
                    _this.m_anchor = null;
                (function () {
                    _this.m_body1 = body1;
                    _this.m_body2 = body2;
                    _this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
                    _this.updateLocalAnchors();
                    _this.m_referenceAngle = Math.fround(_this.m_body2.getRotation() - _this.m_body1.getRotation());
                })();
            }
            else if (((body1 != null && body1 instanceof fisica.FBody) || body1 === null) && ((body2 != null && body2 instanceof fisica.FBody) || body2 === null) && x === undefined && y === undefined) {
                var __args = arguments;
                {
                    var __args_2 = arguments;
                    var x_1 = Math.fround((Math.fround(__args_2[0].getX() + __args_2[1].getX())) / 2);
                    var y_1 = Math.fround((Math.fround(__args_2[0].getY() + __args_2[1].getY())) / 2);
                    _this = _super.call(this) || this;
                    if (_this.m_body1 === undefined)
                        _this.m_body1 = null;
                    if (_this.m_body2 === undefined)
                        _this.m_body2 = null;
                    if (_this.m_anchor === undefined)
                        _this.m_anchor = null;
                    _this.m_localAnchor1 = new org.jbox2d.common.Vec2(0.0, 0.0);
                    _this.m_localAnchor2 = new org.jbox2d.common.Vec2(0.0, 0.0);
                    _this.m_referenceAngle = 0.0;
                    _this.m_enableLimit = false;
                    _this.m_lowerAngle = 0.0;
                    _this.m_upperAngle = 0.0;
                    _this.m_enableMotor = false;
                    _this.m_motorSpeed = 0.0;
                    _this.m_maxMotorTorque = 0.0;
                    if (_this.m_body1 === undefined)
                        _this.m_body1 = null;
                    if (_this.m_body2 === undefined)
                        _this.m_body2 = null;
                    if (_this.m_anchor === undefined)
                        _this.m_anchor = null;
                    (function () {
                        _this.m_body1 = body1;
                        _this.m_body2 = body2;
                        _this.m_anchor = fisica.Fisica.screenToWorld$float$float(x_1, y_1);
                        _this.updateLocalAnchors();
                        _this.m_referenceAngle = Math.fround(_this.m_body2.getRotation() - _this.m_body1.getRotation());
                    })();
                }
            }
            else
                throw new Error('invalid overload');
            return _this;
        }
        FRevoluteJoint.prototype.updateLocalAnchors = function () {
            this.m_localAnchor1 = this.m_body1.getLocalWorldPoint(fisica.Fisica.screenToWorld$float$float(this.getAnchorX(), this.getAnchorY()));
            this.m_localAnchor2 = this.m_body2.getLocalWorldPoint(fisica.Fisica.screenToWorld$float$float(this.getAnchorX(), this.getAnchorY()));
        };
        FRevoluteJoint.prototype.getJointDef = function (world) {
            var md = new org.jbox2d.dynamics.joints.RevoluteJointDef();
            md.body1 = this.m_body1.m_body;
            md.body2 = this.m_body2.m_body;
            md.localAnchor1 = (function (o) { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                var clone = Object.create(o);
                for (var p in o) {
                    if (o.hasOwnProperty(p))
                        clone[p] = o[p];
                }
                return clone;
            } })(this.m_localAnchor1);
            md.localAnchor2 = (function (o) { if (o.clone != undefined) {
                return o.clone();
            }
            else {
                var clone = Object.create(o);
                for (var p in o) {
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
        };
        /**
         * Set the lowest angle allowed.  This property only has effect if the {@code enableLimit} has been set to {@code true} using {@link #setEnableLimit(boolean)}.
         *
         * @param {number} a  lowest angle allowed in radians
         */
        FRevoluteJoint.prototype.setLowerAngle = function (a) {
            if (this.m_joint != null) {
                this.m_joint.m_lowerAngle = a;
            }
            this.m_lowerAngle = a;
        };
        /**
         * Set the highest angle allowed.  This property only has effect if the {@code enableLimit} has been set to {@code true} using {@link #setEnableLimit(boolean)}.
         *
         * @param {number} a  highest angle allowed in radians
         */
        FRevoluteJoint.prototype.setUpperAngle = function (a) {
            if (this.m_joint != null) {
                this.m_joint.m_upperAngle = a;
            }
            this.m_upperAngle = a;
        };
        /**
         * Set limits to the allowed rotation of one body respect to the other.  If set to {@code true} the limits imposed using {@link #setLowerAngle(float) setLowerAngle} and {@link #setUpperAngle(float) setLowerAngle} are enforced.
         *
         * @param {boolean} value  if {@code true} the bodies will be able to rotate around the anchor only between certain limits
         */
        FRevoluteJoint.prototype.setEnableLimit = function (value) {
            if (this.m_joint != null) {
                this.m_joint.m_enableLimit = value;
            }
            this.m_enableLimit = value;
        };
        /**
         * Set the desired rotation speed of the joint.  This property only has effect if the {@code enableMotor} has been set to {@code true} using {@link #setEnableMotor(boolean)}.  The speed is given in radians per second.
         *
         * @param {number} a  the desired speed in radians per second
         */
        FRevoluteJoint.prototype.setMotorSpeed = function (a) {
            if (this.m_joint != null) {
                this.m_joint.m_motorSpeed = a;
            }
            this.m_motorSpeed = a;
        };
        /**
         * Set the maximum torque that the joint's motor can apply in order to acheive the desired speed.  This property only has effect if the {@code enableMotor} has been set to {@code true} using {@link #setEnableMotor(boolean)}.
         *
         * @param {number} a  the maximum torque of the joint's motor
         */
        FRevoluteJoint.prototype.setMaxMotorTorque = function (a) {
            if (this.m_joint != null) {
                this.m_joint.m_maxMotorTorque = a;
            }
            this.m_maxMotorTorque = a;
        };
        /**
         * Set the state of the motor in order to generate a rotation force (torque) on the joint.  If set to {@code true} the desired motor speed, set using {@link #setMotorSpeed(float) setMotorSpeed}, will try to be matched using a motor with a maximum rotation force (torque) set using {@link #setMaxMotorTorque(float) setMaxMotorTorque}.
         *
         * @param {boolean} value  if {@code true} the joint will receive the rotation force (torque) of a motor
         */
        FRevoluteJoint.prototype.setEnableMotor = function (value) {
            if (this.m_joint != null) {
                this.m_joint.m_enableMotor = value;
            }
            this.m_enableMotor = value;
        };
        /**
         * Sets the position of the anchor of the joint around which the bodies rotate.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @param {number} x  the horizontal coordinate of the anchor in global coordinates, relative to the center of the canvas
         * @param {number} y  the vertical coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        FRevoluteJoint.prototype.setAnchor = function (x, y) {
            if (this.m_joint != null) {
                this.m_joint.getAnchor2().set(fisica.Fisica.screenToWorld$float(x), fisica.Fisica.screenToWorld$float(y));
            }
            this.m_anchor = fisica.Fisica.screenToWorld$float$float(x, y);
            this.updateLocalAnchors();
        };
        /**
         * Get the horizontal coordinate of the anchor of the joint around which the bodies can rotate.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @return  {number} the horizontal coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        FRevoluteJoint.prototype.getAnchorX = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).x;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.x);
        };
        /**
         * Get the vertical coordinate of the anchor of the joint around which the bodies can rotate.  This position is given global coordinates, relative to the center of the canvas.
         *
         * @return  {number} the vertical coordinate of the anchor in global coordinates, relative to the center of the canvas
         */
        FRevoluteJoint.prototype.getAnchorY = function () {
            if (this.m_joint != null) {
                return fisica.Fisica.worldToScreen$org_jbox2d_common_Vec2(this.m_joint.getAnchor2()).y;
            }
            return fisica.Fisica.worldToScreen$float(this.m_anchor.y);
        };
        FRevoluteJoint.prototype.setReferenceAngle = function (ang) {
            this.m_referenceAngle = ang;
        };
        FRevoluteJoint.prototype.draw = function (applet) {
            this.preDraw(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody1().getX(), this.getBody1().getY());
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody2().getX(), this.getBody2().getY());
            applet.ellipse(this.getAnchorX(), this.getAnchorY(), 10, 10);
            this.postDraw(applet);
        };
        FRevoluteJoint.prototype.drawDebug = function (applet) {
            this.preDrawDebug(applet);
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody1().getX(), this.getBody1().getY());
            applet.line(this.getAnchorX(), this.getAnchorY(), this.getBody2().getX(), this.getBody2().getY());
            applet.ellipse(this.getAnchorX(), this.getAnchorY(), 10, 10);
            this.postDrawDebug(applet);
        };
        return FRevoluteJoint;
    }(fisica.FJoint));
    fisica.FRevoluteJoint = FRevoluteJoint;
    FRevoluteJoint["__class"] = "fisica.FRevoluteJoint";
})(fisica || (fisica = {}));
